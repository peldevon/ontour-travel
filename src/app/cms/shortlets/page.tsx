"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Edit, Trash2 } from "lucide-react";
import CMSLayout from "@/components/cms/CMSLayout";
import { toast, Toaster } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface Shortlet {
  id: number;
  title: string;
  slug: string;
  location: string;
  price_per_night: number;
  bedrooms: number;
  bathrooms: number;
  max_guests: number;
  amenities: string[];
  images: string[];
  description: string;
  is_published: boolean;
  created_at: string;
}

export default function ShortletsManagement() {
  const router = useRouter();
  const [shortlets, setShortlets] = useState<Shortlet[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchShortlets();
  }, []);

  const fetchShortlets = async () => {
    try {
      const token = localStorage.getItem("bearer_token");
      const response = await fetch("/api/cms/shortlets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!response.ok) throw new Error("Failed to fetch shortlets");
      
      const data = await response.json();
      setShortlets(data.shortlets || []);
    } catch (error) {
      toast.error("Failed to load shortlets");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    
    setDeleting(true);
    try {
      const token = localStorage.getItem("bearer_token");
      const response = await fetch(`/api/cms/shortlets/${deleteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!response.ok) throw new Error("Failed to delete shortlet");
      
      toast.success("Shortlet deleted successfully");
      fetchShortlets();
      setDeleteId(null);
    } catch (error) {
      toast.error("Failed to delete shortlet");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <CMSLayout>
      <Toaster />
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Shortlets</h1>
            <p className="text-muted-foreground">Manage your shortlet listings</p>
          </div>
          <Button onClick={() => router.push("/cms/shortlets/new")}>
            <Plus className="mr-2 h-4 w-4" />
            Add Shortlet
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Shortlets</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : shortlets.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No shortlets found. Create your first one!
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Price/Night</TableHead>
                    <TableHead>Bedrooms</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shortlets.map((shortlet) => (
                    <TableRow key={shortlet.id}>
                      <TableCell className="font-medium">{shortlet.title}</TableCell>
                      <TableCell>{shortlet.location}</TableCell>
                      <TableCell>₦{shortlet.price_per_night.toLocaleString()}</TableCell>
                      <TableCell>{shortlet.bedrooms}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          shortlet.is_published 
                            ? "bg-green-100 text-green-800" 
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {shortlet.is_published ? "Published" : "Draft"}
                        </span>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => router.push(`/cms/shortlets/${shortlet.id}`)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setDeleteId(shortlet.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this shortlet? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteId(null)}
              disabled={deleting}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
            >
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </CMSLayout>
  );
}
