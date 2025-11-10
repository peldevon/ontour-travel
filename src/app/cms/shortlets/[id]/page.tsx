"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Input,
  VStack,
  Textarea,
  Grid,
  Switch,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { Save, X, Plus, Trash } from "lucide-react";
import CMSLayout from "@/components/cms/CMSLayout";
import { toast, Toaster } from "sonner";

export default function EditShortlet() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    location: "",
    price_per_night: "",
    bedrooms: "",
    bathrooms: "",
    max_guests: "",
    amenities: [] as string[],
    images: [] as string[],
    is_published: false,
  });
  const [newAmenity, setNewAmenity] = useState("");
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    fetchShortlet();
  }, [id]);

  const fetchShortlet = async () => {
    try {
      const token = localStorage.getItem("bearer_token");
      const response = await fetch(`/api/cms/shortlets?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch shortlet");

      const data = await response.json();
      setFormData({
        title: data.title || "",
        slug: data.slug || "",
        description: data.description || "",
        location: data.location || "",
        price_per_night: data.pricePerNight?.toString() || "",
        bedrooms: data.bedrooms?.toString() || "",
        bathrooms: data.bathrooms?.toString() || "",
        max_guests: data.maxGuests?.toString() || "",
        amenities: data.amenities || [],
        images: data.images || [],
        is_published: data.status === "active",
      });
    } catch (error) {
      toast.error("Failed to load shortlet");
      router.push("/cms/shortlets");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!formData.slug.trim()) {
      toast.error("Slug is required");
      return;
    }
    if (!formData.description.trim()) {
      toast.error("Description is required");
      return;
    }
    if (!formData.location.trim()) {
      toast.error("Location is required");
      return;
    }
    if (!formData.price_per_night || parseInt(formData.price_per_night) <= 0) {
      toast.error("Valid price per night is required");
      return;
    }
    if (!formData.bedrooms || parseInt(formData.bedrooms) <= 0) {
      toast.error("Valid number of bedrooms is required");
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem("bearer_token");
      const response = await fetch(`/api/cms/shortlets?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: formData.title.trim(),
          slug: formData.slug.trim(),
          description: formData.description.trim(),
          location: formData.location.trim(),
          price_per_night: parseInt(formData.price_per_night),
          bedrooms: parseInt(formData.bedrooms),
          amenities: formData.amenities,
          images: formData.images,
          status: formData.is_published ? "active" : "inactive",
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update shortlet");
      }

      toast.success("Shortlet updated successfully");
      router.push("/cms/shortlets");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to update shortlet");
    } finally {
      setSaving(false);
    }
  };

  const addAmenity = () => {
    if (newAmenity.trim()) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, newAmenity.trim()],
      });
      setNewAmenity("");
    }
  };

  const removeAmenity = (index: number) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.filter((_, i) => i !== index),
    });
  };

  const addImage = () => {
    if (newImage.trim()) {
      setFormData({
        ...formData,
        images: [...formData.images, newImage.trim()],
      });
      setNewImage("");
    }
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  if (loading) {
    return (
      <CMSLayout>
        <Box py={8} textAlign="center">
          <Text>Loading shortlet...</Text>
        </Box>
      </CMSLayout>
    );
  }

  return (
    <CMSLayout>
      <Toaster position="top-right" />
      <VStack align="stretch" gap={6}>
        <Flex justify="space-between" align="center">
          <Box>
            <Heading fontSize="2xl" mb={2}>
              Edit Shortlet
            </Heading>
            <Text color="gray.600">Update property details</Text>
          </Box>
          <HStack gap={2}>
            <Button
              variant="outline"
              onClick={() => router.push("/cms/shortlets")}
              disabled={saving}
            >
              <X size={20} style={{ marginRight: "8px" }} />
              Cancel
            </Button>
            <Button
              colorPalette="blue"
              onClick={handleSubmit}
              disabled={saving}
            >
              <Save size={20} style={{ marginRight: "8px" }} />
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </HStack>
        </Flex>

        <Card.Root>
          <Card.Header>
            <Heading fontSize="lg">Basic Information</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Title *
                  </Text>
                  <Input
                    placeholder="Luxury 2-Bedroom Apartment in Lekki"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Slug *
                  </Text>
                  <Input
                    placeholder="luxury-2br-lekki"
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData({ ...formData, slug: e.target.value })
                    }
                  />
                </Box>
              </Grid>

              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Description *
                </Text>
                <Textarea
                  placeholder="Describe the property..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={6}
                />
              </Box>

              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Location *
                  </Text>
                  <Input
                    placeholder="Lekki, Lagos"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Price per Night (₦) *
                  </Text>
                  <Input
                    type="number"
                    placeholder="50000"
                    value={formData.price_per_night}
                    onChange={(e) =>
                      setFormData({ ...formData, price_per_night: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Bedrooms *
                  </Text>
                  <Input
                    type="number"
                    placeholder="2"
                    value={formData.bedrooms}
                    onChange={(e) =>
                      setFormData({ ...formData, bedrooms: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Bathrooms
                  </Text>
                  <Input
                    type="number"
                    placeholder="2"
                    value={formData.bathrooms}
                    onChange={(e) =>
                      setFormData({ ...formData, bathrooms: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Max Guests
                  </Text>
                  <Input
                    type="number"
                    placeholder="4"
                    value={formData.max_guests}
                    onChange={(e) =>
                      setFormData({ ...formData, max_guests: e.target.value })
                    }
                  />
                </Box>
              </Grid>

              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="sm" fontWeight="medium">
                    Publish Status
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Make this shortlet visible on the website
                  </Text>
                </Box>
                <Switch
                  checked={formData.is_published}
                  onCheckedChange={(e) =>
                    setFormData({ ...formData, is_published: e.checked })
                  }
                />
              </Flex>
            </VStack>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Heading fontSize="lg">Amenities</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <HStack gap={2}>
                <Input
                  placeholder="Add amenity"
                  value={newAmenity}
                  onChange={(e) => setNewAmenity(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addAmenity()}
                  flex={1}
                />
                <Button onClick={addAmenity} colorPalette="blue">
                  <Plus size={20} />
                </Button>
              </HStack>

              {formData.amenities.length > 0 && (
                <Flex gap={2} wrap="wrap">
                  {formData.amenities.map((amenity, index) => (
                    <Badge
                      key={index}
                      colorPalette="blue"
                      display="flex"
                      alignItems="center"
                      gap={2}
                      px={3}
                      py={2}
                    >
                      {amenity}
                      <Trash
                        size={14}
                        onClick={() => removeAmenity(index)}
                        style={{ cursor: "pointer" }}
                      />
                    </Badge>
                  ))}
                </Flex>
              )}
            </VStack>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Heading fontSize="lg">Images</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <HStack gap={2}>
                <Input
                  placeholder="Add image URL"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addImage()}
                  flex={1}
                />
                <Button onClick={addImage} colorPalette="blue">
                  <Plus size={20} />
                </Button>
              </HStack>

              {formData.images.length > 0 && (
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
                  {formData.images.map((image, index) => (
                    <Card.Root key={index}>
                      <Card.Body p={2}>
                        <Box
                          h="120px"
                          bg="gray.100"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          overflow="hidden"
                          borderRadius="md"
                          mb={2}
                        >
                          <img
                            src={image}
                            alt={`Preview ${index + 1}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                        <Button
                          size="sm"
                          variant="outline"
                          colorScheme="red"
                          w="full"
                          onClick={() => removeImage(index)}
                        >
                          <Trash size={14} style={{ marginRight: "4px" }} />
                          Remove
                        </Button>
                      </Card.Body>
                    </Card.Root>
                  ))}
                </Grid>
              )}
            </VStack>
          </Card.Body>
        </Card.Root>
      </VStack>
    </CMSLayout>
  );
}
