"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Card,
  Flex,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Building, Map, Users, FileText, ImageIcon, Settings } from "lucide-react";
import CMSLayout from "@/components/cms/CMSLayout";

export default function CMSDashboard() {
  const [stats, setStats] = useState({
    shortlets: 0,
    tours: 0,
    pages: 0,
    media: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [shortletsRes, toursRes, pagesRes, mediaRes] = await Promise.all([
          fetch("/api/cms/shortlets"),
          fetch("/api/cms/tours"),
          fetch("/api/cms/pages"),
          fetch("/api/cms/media"),
        ]);

        const shortlets = await shortletsRes.json();
        const tours = await toursRes.json();
        const pages = await pagesRes.json();
        const media = await mediaRes.json();

        setStats({
          shortlets: Array.isArray(shortlets) ? shortlets.length : 0,
          tours: Array.isArray(tours) ? tours.length : 0,
          pages: Array.isArray(pages) ? pages.length : 0,
          media: Array.isArray(media) ? media.length : 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      label: "Pages",
      value: stats.pages,
      icon: FileText,
      color: "#152852",
      bg: "#f0f0f0",
      href: "/cms/pages",
    },
    {
      label: "Shortlets",
      value: stats.shortlets,
      icon: Building,
      color: "#C9A449",
      bg: "#f0f0f0",
      href: "/cms/shortlets",
    },
    {
      label: "Tours",
      value: stats.tours,
      icon: Map,
      color: "#152852",
      bg: "#f0f0f0",
      href: "/cms/tours",
    },
    {
      label: "Media Files",
      value: stats.media,
      icon: ImageIcon,
      color: "#C9A449",
      bg: "#f0f0f0",
      href: "/cms/media",
    },
  ];

  const quickLinks = [
    {
      title: "Manage Pages",
      description: "Edit website pages and content",
      icon: FileText,
      color: "#152852",
      href: "/cms/pages",
    },
    {
      title: "Manage Shortlets",
      description: "Add or edit properties",
      icon: Building,
      color: "#C9A449",
      href: "/cms/shortlets",
    },
    {
      title: "Manage Tours",
      description: "Update tour packages",
      icon: Map,
      color: "#152852",
      href: "/cms/tours",
    },
    {
      title: "Media Library",
      description: "Upload and manage media files",
      icon: ImageIcon,
      color: "#C9A449",
      href: "/cms/media",
    },
    {
      title: "Site Settings",
      description: "Configure site preferences",
      icon: Settings,
      color: "#152852",
      href: "/cms/settings",
    },
  ];

  return (
    <CMSLayout>
      <VStack align="stretch" gap={6}>
        <Box>
          <Heading fontSize="2xl" fontWeight="bold" mb={2} color="#2C2C2C">
            Welcome to Ontour Travels CMS
          </Heading>
          <Text color="gray.600">
            Manage your website content, shortlets, tour packages, and media from this dashboard.
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
          {statCards.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card.Root 
                key={stat.label} 
                bg={stat.bg} 
                borderRadius="lg" 
                p={6}
                cursor="pointer"
                _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                as="a"
                href={stat.href}
              >
                <Card.Body>
                  <Flex justify="space-between" align="start">
                    <VStack align="start" gap={2}>
                      <Text fontSize="sm" color="#2C2C2C" fontWeight="medium">
                        {stat.label}
                      </Text>
                      <Heading fontSize="3xl" fontWeight="bold" color={stat.color}>
                        {loading ? "..." : stat.value}
                      </Heading>
                    </VStack>
                    <Box
                      bg="white"
                      p={3}
                      borderRadius="lg"
                    >
                      <IconComponent size={24} color={stat.color} />
                    </Box>
                  </Flex>
                </Card.Body>
              </Card.Root>
            );
          })}
        </Grid>

        <Card.Root>
          <Card.Body p={6}>
            <Heading fontSize="lg" mb={4} color="#2C2C2C">
              Quick Actions
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Box
                    key={link.title}
                    as="a"
                    href={link.href}
                    p={4}
                    borderRadius="md"
                    border="1px"
                    borderColor="#E5E5E5"
                    _hover={{ borderColor: link.color, bg: "#f0f0f0" }}
                    transition="all 0.2s"
                  >
                    <IconComponent size={24} color={link.color} style={{ marginBottom: '8px' }} />
                    <Text fontWeight="medium" color="#2C2C2C" mb={1}>{link.title}</Text>
                    <Text fontSize="sm" color="gray.600">
                      {link.description}
                    </Text>
                  </Box>
                );
              })}
            </Grid>
          </Card.Body>
        </Card.Root>

        <Card.Root bg="#152852" color="white">
          <Card.Body p={6}>
            <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
              <Box>
                <Heading fontSize="lg" mb={2}>
                  Need Help?
                </Heading>
                <Text fontSize="sm" color="#E5E5E5">
                  Check out our documentation or contact support for assistance.
                </Text>
              </Box>
              <Button
                bg="#C9A449"
                color="#2C2C2C"
                _hover={{ bg: "#b89339" }}
                size="md"
                as="a"
                href="/cms/guide"
              >
                View Documentation
              </Button>
            </Flex>
          </Card.Body>
        </Card.Root>
      </VStack>
    </CMSLayout>
  );
}