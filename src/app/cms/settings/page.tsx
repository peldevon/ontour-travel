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
  Textarea,
  Grid,
  Switch,
} from "@chakra-ui/react";
import { Save, Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import CMSLayout from "@/components/cms/CMSLayout";
import { toast, Toaster } from "sonner";

interface SiteSettings {
  siteName: string;
  siteTagline: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  address: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  heroTitle: string;
  heroSubtitle: string;
  enableBooking: boolean;
  enableShortlets: boolean;
  enableTours: boolean;
}

export default function CMSSettings() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: "Ontour Travels",
    siteTagline: "Your Journey, Our Passion",
    siteDescription: "Luxury travel and accommodation services in Nigeria",
    contactEmail: "info@ontourtravels.com.ng",
    contactPhone: "+234 812 345 6789",
    whatsappNumber: "2348123456789",
    address: "Lagos, Nigeria",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    heroTitle: "Explore the World, Stay in Comfort",
    heroSubtitle: "Luxury short stays and unforgettable journeys — perfectly planned for you.",
    enableBooking: true,
    enableShortlets: true,
    enableTours: true,
  });
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      // Save settings to localStorage or API
      localStorage.setItem("site_settings", JSON.stringify(settings));
      toast.success("Settings saved successfully");
    } catch (error) {
      toast.error("Failed to save settings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem("site_settings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  return (
    <CMSLayout>
      <Toaster position="top-right" />
      <VStack align="stretch" gap={6}>
        <Flex justify="space-between" align="center">
          <Box>
            <Heading fontSize="2xl" mb={2}>
              Site Settings
            </Heading>
            <Text color="gray.600">
              Configure global site settings and preferences
            </Text>
          </Box>
          <Button
            colorPalette="blue"
            onClick={handleSave}
            disabled={loading}
          >
            <Save size={20} style={{ marginRight: '8px' }} />
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </Flex>

        {/* General Settings */}
        <Card.Root>
          <Card.Header>
            <Heading fontSize="lg">General Information</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Site Name *
                  </Text>
                  <Input
                    value={settings.siteName}
                    onChange={(e) =>
                      setSettings({ ...settings, siteName: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Site Tagline
                  </Text>
                  <Input
                    value={settings.siteTagline}
                    onChange={(e) =>
                      setSettings({ ...settings, siteTagline: e.target.value })
                    }
                  />
                </Box>
              </Grid>

              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Site Description
                </Text>
                <Textarea
                  value={settings.siteDescription}
                  onChange={(e) =>
                    setSettings({ ...settings, siteDescription: e.target.value })
                  }
                  rows={3}
                />
              </Box>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Hero Section Settings */}
        <Card.Root>
          <Card.Header>
            <Heading fontSize="lg">Hero Section</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Hero Title *
                </Text>
                <Input
                  value={settings.heroTitle}
                  onChange={(e) =>
                    setSettings({ ...settings, heroTitle: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Hero Subtitle
                </Text>
                <Textarea
                  value={settings.heroSubtitle}
                  onChange={(e) =>
                    setSettings({ ...settings, heroSubtitle: e.target.value })
                  }
                  rows={2}
                />
              </Box>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Contact Information */}
        <Card.Root>
          <Card.Header>
            <Heading fontSize="lg">Contact Information</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    <Mail size={16} style={{ display: 'inline', marginRight: '4px' }} />
                    Contact Email *
                  </Text>
                  <Input
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) =>
                      setSettings({ ...settings, contactEmail: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    <Phone size={16} style={{ display: 'inline', marginRight: '4px' }} />
                    Contact Phone *
                  </Text>
                  <Input
                    value={settings.contactPhone}
                    onChange={(e) =>
                      setSettings({ ...settings, contactPhone: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    WhatsApp Number (with country code)
                  </Text>
                  <Input
                    placeholder="2348123456789"
                    value={settings.whatsappNumber}
                    onChange={(e) =>
                      setSettings({ ...settings, whatsappNumber: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    <MapPin size={16} style={{ display: 'inline', marginRight: '4px' }} />
                    Address
                  </Text>
                  <Input
                    value={settings.address}
                    onChange={(e) =>
                      setSettings({ ...settings, address: e.target.value })
                    }
                  />
                </Box>
              </Grid>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Social Media */}
        <Card.Root>
          <Card.Header>
            <Heading fontSize="lg">Social Media</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  <Facebook size={16} style={{ display: 'inline', marginRight: '4px' }} />
                  Facebook URL
                </Text>
                <Input
                  placeholder="https://facebook.com/yourpage"
                  value={settings.facebookUrl}
                  onChange={(e) =>
                    setSettings({ ...settings, facebookUrl: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  <Twitter size={16} style={{ display: 'inline', marginRight: '4px' }} />
                  Twitter URL
                </Text>
                <Input
                  placeholder="https://twitter.com/yourprofile"
                  value={settings.twitterUrl}
                  onChange={(e) =>
                    setSettings({ ...settings, twitterUrl: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  <Instagram size={16} style={{ display: 'inline', marginRight: '4px' }} />
                  Instagram URL
                </Text>
                <Input
                  placeholder="https://instagram.com/yourprofile"
                  value={settings.instagramUrl}
                  onChange={(e) =>
                    setSettings({ ...settings, instagramUrl: e.target.value })
                  }
                />
              </Box>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Feature Toggles */}
        <Card.Root>
          <Card.Header>
            <Heading fontSize="lg">Feature Toggles</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="sm" fontWeight="medium">
                    Enable Flight & Hotel Booking
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Show booking search widget on homepage
                  </Text>
                </Box>
                <Switch
                  checked={settings.enableBooking}
                  onCheckedChange={(e) =>
                    setSettings({ ...settings, enableBooking: e.checked })
                  }
                />
              </Flex>

              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="sm" fontWeight="medium">
                    Enable Shortlets
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Display shortlets section and page
                  </Text>
                </Box>
                <Switch
                  checked={settings.enableShortlets}
                  onCheckedChange={(e) =>
                    setSettings({ ...settings, enableShortlets: e.checked })
                  }
                />
              </Flex>

              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="sm" fontWeight="medium">
                    Enable Tours
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Display tours section and page
                  </Text>
                </Box>
                <Switch
                  checked={settings.enableTours}
                  onCheckedChange={(e) =>
                    setSettings({ ...settings, enableTours: e.checked })
                  }
                />
              </Flex>
            </VStack>
          </Card.Body>
        </Card.Root>
      </VStack>
    </CMSLayout>
  );
}
