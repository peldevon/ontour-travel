"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Input,
  VStack,
  HStack,
  Grid,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { Plus, Trash, Copy, ExternalLink, Upload, Search, ImageIcon, FileText, Film } from "lucide-react";
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

interface Media {
  id: number;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  altText?: string;
  uploadedBy: number;
  createdAt: string;
}

export default function CMSMedia() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await fetch("/api/cms/media");
      const data = await response.json();
      setMedia(data);
    } catch (error) {
      toast.error("Failed to load media");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });

      const user = JSON.parse(localStorage.getItem("cms_user") || "{}");
      formData.append("uploadedBy", user.id.toString());

      const response = await fetch("/api/cms/media", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload files");
      
      toast.success(`${files.length} file(s) uploaded successfully`);
      fetchMedia();
    } catch (error) {
      toast.error("Failed to upload files");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const response = await fetch(`/api/cms/media/${deleteId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete media");
      toast.success("Media deleted successfully");
      fetchMedia();
      setDeleteId(null);
    } catch (error) {
      toast.error("Failed to delete media");
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType.startsWith("image/")) return ImageIcon;
    if (mimeType.startsWith("video/")) return Film;
    return FileText;
  };

  const filteredMedia = media.filter(
    (item) =>
      item.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.originalName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <CMSLayout>
      <Toaster position="top-right" />
      <VStack align="stretch" gap={6}>
        <Flex justify="space-between" align="center">
          <Box>
            <Heading fontSize="2xl" mb={2}>
              Media Library
            </Heading>
            <Text color="gray.600">
              Upload and manage images, videos, and documents
            </Text>
          </Box>
          <Button
            colorPalette="blue"
            as="label"
            cursor="pointer"
            disabled={uploading}
          >
            <Upload size={20} style={{ marginRight: '8px' }} />
            {uploading ? "Uploading..." : "Upload Files"}
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </Button>
        </Flex>

        <Card.Root>
          <Card.Body p={6}>
            <HStack gap={4} mb={6}>
              <Input
                placeholder="Search media files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                flex={1}
              />
              <IconButton aria-label="Search">
                <Search size={20} />
              </IconButton>
            </HStack>

            {loading ? (
              <Text textAlign="center" color="gray.500" py={8}>
                Loading media...
              </Text>
            ) : filteredMedia.length === 0 ? (
              <Flex direction="column" align="center" gap={4} py={8}>
                <ImageIcon size={48} color="gray" />
                <Text textAlign="center" color="gray.500">
                  {searchQuery
                    ? "No media files found matching your search"
                    : "No media files yet. Upload your first file to get started."}
                </Text>
              </Flex>
            ) : (
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                }}
                gap={4}
              >
                {filteredMedia.map((item) => {
                  const FileIcon = getFileIcon(item.mimeType);
                  return (
                    <Card.Root
                      key={item.id}
                      cursor="pointer"
                      _hover={{ boxShadow: "md" }}
                      transition="all 0.2s"
                      onClick={() => setSelectedMedia(item)}
                    >
                      <Card.Body p={0}>
                        <Box
                          h="200px"
                          bg="gray.100"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          overflow="hidden"
                        >
                          {item.mimeType.startsWith("image/") ? (
                            <Image
                              src={item.url}
                              alt={item.altText || item.filename}
                              w="full"
                              h="full"
                              objectFit="cover"
                            />
                          ) : (
                            <FileIcon size={48} color="#C9A449" />
                          )}
                        </Box>
                        <Box p={3}>
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            noOfLines={1}
                            mb={1}
                          >
                            {item.originalName}
                          </Text>
                          <Text fontSize="xs" color="gray.600">
                            {formatFileSize(item.size)}
                          </Text>
                        </Box>
                      </Card.Body>
                    </Card.Root>
                  );
                })}
              </Grid>
            )}
          </Card.Body>
        </Card.Root>
      </VStack>

      {/* Media Details Dialog */}
      <Dialog
        open={!!selectedMedia}
        onOpenChange={(open) => !open && setSelectedMedia(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Media Details</DialogTitle>
          </DialogHeader>
          {selectedMedia && (
            <VStack align="stretch" gap={4}>
              <Box
                h="300px"
                bg="gray.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
                borderRadius="md"
              >
                {selectedMedia.mimeType.startsWith("image/") ? (
                  <Image
                    src={selectedMedia.url}
                    alt={selectedMedia.altText || selectedMedia.filename}
                    maxH="full"
                    maxW="full"
                    objectFit="contain"
                  />
                ) : (
                  <FileText size={64} color="#C9A449" />
                )}
              </Box>

              <VStack align="stretch" gap={2}>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    Filename
                  </Text>
                  <Text fontSize="sm">{selectedMedia.originalName}</Text>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    File Size
                  </Text>
                  <Text fontSize="sm">{formatFileSize(selectedMedia.size)}</Text>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    Type
                  </Text>
                  <Text fontSize="sm">{selectedMedia.mimeType}</Text>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={2}>
                    URL
                  </Text>
                  <Flex gap={2}>
                    <Input
                      value={selectedMedia.url}
                      readOnly
                      size="sm"
                      fontSize="xs"
                    />
                    <IconButton
                      size="sm"
                      aria-label="Copy URL"
                      onClick={() => copyToClipboard(selectedMedia.url)}
                    >
                      <Copy size={16} />
                    </IconButton>
                    <IconButton
                      size="sm"
                      aria-label="Open in new tab"
                      as="a"
                      href={selectedMedia.url}
                      target="_blank"
                    >
                      <ExternalLink size={16} />
                    </IconButton>
                  </Flex>
                </Box>
              </VStack>
            </VStack>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setSelectedMedia(null)}
            >
              Close
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                setDeleteId(selectedMedia?.id || null);
                setSelectedMedia(null);
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={!!deleteId}
        onOpenChange={(open) => !open && setDeleteId(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this media file? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </CMSLayout>
  );
}
