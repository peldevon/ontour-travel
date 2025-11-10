"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  Select,
} from "@chakra-ui/react";
import { Save, X, Plus, Trash } from "lucide-react";
import CMSLayout from "@/components/cms/CMSLayout";
import { toast, Toaster } from "sonner";

export default function NewTour() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    destination: "",
    duration: "",
    price_from: "",
    category: "",
    tag: "",
    inclusions: [] as string[],
    exclusions: [] as string[],
    images: [] as string[],
    is_published: false,
  });
  const [newInclusion, setNewInclusion] = useState("");
  const [newExclusion, setNewExclusion] = useState("");
  const [newImage, setNewImage] = useState("");

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
    if (!formData.duration.trim()) {
      toast.error("Duration is required");
      return;
    }
    if (!formData.price_from || parseInt(formData.price_from) <= 0) {
      toast.error("Valid price is required");
      return;
    }
    if (!formData.tag.trim()) {
      toast.error("Tag/Category is required");
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem("bearer_token");
      const response = await fetch("/api/cms/tours", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: formData.title.trim(),
          slug: formData.slug.trim(),
          description: formData.description.trim(),
          duration: formData.duration.trim(),
          priceFrom: parseInt(formData.price_from),
          tag: formData.tag.trim(),
          images: formData.images,
          inclusions: formData.inclusions,
          exclusions: formData.exclusions,
          status: formData.is_published ? "active" : "inactive",
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create tour");
      }

      toast.success("Tour created successfully");
      router.push("/cms/tours");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create tour");
    } finally {
      setSaving(false);
    }
  };

  const addInclusion = () => {
    if (newInclusion.trim()) {
      setFormData({
        ...formData,
        inclusions: [...formData.inclusions, newInclusion.trim()],
      });
      setNewInclusion("");
    }
  };

  const removeInclusion = (index: number) => {
    setFormData({
      ...formData,
      inclusions: formData.inclusions.filter((_, i) => i !== index),
    });
  };

  const addExclusion = () => {
    if (newExclusion.trim()) {
      setFormData({
        ...formData,
        exclusions: [...formData.exclusions, newExclusion.trim()],
      });
      setNewExclusion("");
    }
  };

  const removeExclusion = (index: number) => {
    setFormData({
      ...formData,
      exclusions: formData.exclusions.filter((_, i) => i !== index),
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

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    setFormData({ ...formData, slug });
  };

  return (
    <CMSLayout>
      <Toaster position="top-right" />
      <VStack align="stretch" gap={6}>
        <Flex justify="space-between" align="center">
          <Box>
            <Heading fontSize="2xl" mb={2}>
              Create New Tour
            </Heading>
            <Text color="gray.600">Add a new tour package to your offerings</Text>
          </Box>
          <HStack gap={2}>
            <Button
              variant="outline"
              onClick={() => router.push("/cms/tours")}
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
              {saving ? "Saving..." : "Save Tour"}
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
                    placeholder="Dubai Luxury Experience"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    onBlur={generateSlug}
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Slug *
                  </Text>
                  <Input
                    placeholder="dubai-luxury-experience"
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
                  placeholder="Describe the tour package, highlights, and what makes it special..."
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
                    Destination
                  </Text>
                  <Input
                    placeholder="Dubai, UAE"
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Duration *
                  </Text>
                  <Input
                    placeholder="5 Days / 4 Nights"
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData({ ...formData, duration: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Price From (₦) *
                  </Text>
                  <Input
                    type="number"
                    placeholder="500000"
                    value={formData.price_from}
                    onChange={(e) =>
                      setFormData({ ...formData, price_from: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Tag/Category *
                  </Text>
                  <Select.Root
                    value={formData.tag ? [formData.tag] : []}
                    onValueChange={(e) =>
                      setFormData({ ...formData, tag: e.value[0] })
                    }
                  >
                    <Select.Trigger>
                      <Select.ValueText placeholder="Select category" />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item item="adventure" value="adventure">Adventure</Select.Item>
                      <Select.Item item="luxury" value="luxury">Luxury</Select.Item>
                      <Select.Item item="cultural" value="cultural">Cultural</Select.Item>
                      <Select.Item item="beach" value="beach">Beach</Select.Item>
                      <Select.Item item="safari" value="safari">Safari</Select.Item>
                      <Select.Item item="city" value="city">City</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Box>
              </Grid>

              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="sm" fontWeight="medium">
                    Publish Status
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Make this tour visible on the website
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
            <Heading fontSize="lg">Inclusions</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <HStack gap={2}>
                <Input
                  placeholder="Add inclusion (e.g., Round-trip flights)"
                  value={newInclusion}
                  onChange={(e) => setNewInclusion(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addInclusion()}
                  flex={1}
                />
                <Button onClick={addInclusion} colorPalette="blue">
                  <Plus size={20} />
                </Button>
              </HStack>

              {formData.inclusions.length > 0 && (
                <Flex gap={2} wrap="wrap">
                  {formData.inclusions.map((inclusion, index) => (
                    <Badge
                      key={index}
                      colorPalette="green"
                      display="flex"
                      alignItems="center"
                      gap={2}
                      px={3}
                      py={2}
                    >
                      {inclusion}
                      <Trash
                        size={14}
                        onClick={() => removeInclusion(index)}
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
            <Heading fontSize="lg">Exclusions</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <HStack gap={2}>
                <Input
                  placeholder="Add exclusion (e.g., Travel insurance)"
                  value={newExclusion}
                  onChange={(e) => setNewExclusion(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addExclusion()}
                  flex={1}
                />
                <Button onClick={addExclusion} colorPalette="blue">
                  <Plus size={20} />
                </Button>
              </HStack>

              {formData.exclusions.length > 0 && (
                <Flex gap={2} wrap="wrap">
                  {formData.exclusions.map((exclusion, index) => (
                    <Badge
                      key={index}
                      colorPalette="red"
                      display="flex"
                      alignItems="center"
                      gap={2}
                      px={3}
                      py={2}
                    >
                      {exclusion}
                      <Trash
                        size={14}
                        onClick={() => removeExclusion(index)}
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

              <Text fontSize="sm" color="gray.600">
                Tip: Upload images in the Media Library and copy their URLs here
              </Text>

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
