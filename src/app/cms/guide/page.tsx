"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Card,
  Accordion,
  Grid,
} from "@chakra-ui/react";
import { 
  FileText, 
  Building, 
  Map, 
  ImageIcon, 
  Settings, 
  BookOpen,
  Zap,
  Shield,
  Users
} from "lucide-react";
import CMSLayout from "@/components/cms/CMSLayout";

export default function CMSGuide() {
  const sections = [
    {
      icon: FileText,
      title: "Managing Pages",
      color: "#152852",
      items: [
        {
          question: "How do I create a new page?",
          answer: "Click 'Pages' in the sidebar, then click 'Create Page'. Fill in the title, slug (URL), content, and SEO meta information. Use the rich text editor to format your content with headings, lists, images, and more."
        },
        {
          question: "What is a slug?",
          answer: "A slug is the URL-friendly version of your page title. For example, 'About Us' becomes 'about-us'. This appears in the website URL: yoursite.com/about-us"
        },
        {
          question: "How do I publish a page?",
          answer: "When editing a page, set the status to 'Published'. Draft pages are not visible to website visitors. You can also archive pages you no longer need without deleting them."
        },
        {
          question: "Can I use HTML in pages?",
          answer: "Yes! The rich text editor supports HTML. You can switch to HTML view to add custom code, embed videos, or create advanced layouts."
        }
      ]
    },
    {
      icon: Building,
      title: "Managing Shortlets",
      color: "#C9A449",
      items: [
        {
          question: "How do I add a new shortlet?",
          answer: "Go to 'Shortlets' and click 'Add Shortlet'. Fill in property details including title, location, pricing, number of bedrooms/bathrooms, and amenities. Upload multiple images to showcase the property."
        },
        {
          question: "How do I set pricing?",
          answer: "Enter the nightly rate in Naira (₦). You can also set minimum stay requirements and special pricing for peak seasons in the description."
        },
        {
          question: "What should I include in the description?",
          answer: "Write a compelling description highlighting unique features, nearby attractions, and what makes the property special. Include check-in/out times, house rules, and any special requirements."
        },
        {
          question: "How do I feature a shortlet?",
          answer: "When editing a shortlet, toggle the 'Featured' option. Featured shortlets appear prominently on the homepage and shortlets page."
        }
      ]
    },
    {
      icon: Map,
      title: "Managing Tours",
      color: "#152852",
      items: [
        {
          question: "How do I create a tour package?",
          answer: "Navigate to 'Tours' and click 'Add Tour'. Enter tour details including destination, duration, pricing, category (Local/Regional/International), and full itinerary."
        },
        {
          question: "What should I include in tour packages?",
          answer: "Include comprehensive details: day-by-day itinerary, what's included/excluded, accommodation details, visa requirements, best travel seasons, and any add-on services available."
        },
        {
          question: "How do I organize tour categories?",
          answer: "Tours are categorized as Local (Nigeria), Regional (Africa), or International. Choose the appropriate category when creating or editing a tour."
        },
        {
          question: "Can I add multiple images?",
          answer: "Yes! Upload multiple images showing destinations, accommodations, and activities. The first image becomes the main thumbnail on listing pages."
        }
      ]
    },
    {
      icon: ImageIcon,
      title: "Media Library",
      color: "#C9A449",
      items: [
        {
          question: "How do I upload images?",
          answer: "Go to 'Media' and click 'Upload Files'. You can select multiple images at once. Supported formats include JPG, PNG, GIF, and WebP."
        },
        {
          question: "What are the image size requirements?",
          answer: "For best performance, keep images under 2MB. Recommended sizes: hero images (1920x1080), property images (1200x800), thumbnails (600x400). Images are automatically optimized."
        },
        {
          question: "How do I use uploaded images?",
          answer: "After uploading, click any image in the media library to view details and copy its URL. Use this URL when adding images to pages, shortlets, or tours."
        },
        {
          question: "Can I delete images?",
          answer: "Yes, but be careful! If an image is being used on your website, deleting it will break those references. Always check where an image is used before deleting."
        }
      ]
    },
    {
      icon: Settings,
      title: "Site Settings",
      color: "#152852",
      items: [
        {
          question: "How do I update site information?",
          answer: "Go to 'Settings' to update site name, tagline, contact information, social media links, and hero section content. Changes apply globally across the website."
        },
        {
          question: "How do I change the hero section?",
          answer: "In Settings, edit 'Hero Title' and 'Hero Subtitle' fields. These appear on your homepage banner. Make them compelling to engage visitors immediately."
        },
        {
          question: "How do I update contact details?",
          answer: "Update your email, phone, WhatsApp number, and address in the Contact Information section. These appear in your footer and contact page."
        },
        {
          question: "What are feature toggles?",
          answer: "Feature toggles let you enable/disable major site sections. Turn off 'Enable Tours' if you're not offering tours yet, or disable booking features during maintenance."
        }
      ]
    }
  ];

  const bestPractices = [
    {
      icon: Zap,
      title: "Performance Tips",
      tips: [
        "Optimize images before uploading - compress large files",
        "Use descriptive filenames for better SEO",
        "Keep page content concise and scannable",
        "Test your changes on mobile devices"
      ]
    },
    {
      icon: Shield,
      title: "Security & Backups",
      tips: [
        "Change your CMS password regularly",
        "Only give CMS access to trusted team members",
        "Preview changes before publishing",
        "Keep a backup of important content externally"
      ]
    },
    {
      icon: BookOpen,
      title: "SEO Best Practices",
      tips: [
        "Write unique meta descriptions for each page",
        "Use descriptive page titles with keywords",
        "Include alt text for all images",
        "Keep URLs short and descriptive"
      ]
    },
    {
      icon: Users,
      title: "Content Guidelines",
      tips: [
        "Write in a friendly, conversational tone",
        "Break text into short paragraphs",
        "Use headings to organize content",
        "Include clear calls-to-action"
      ]
    }
  ];

  return (
    <CMSLayout>
      <VStack align="stretch" gap={8}>
        <Box>
          <Heading fontSize="2xl" mb={2} color="#2C2C2C">
            CMS User Guide
          </Heading>
          <Text color="gray.600">
            Everything you need to know about managing your website content
          </Text>
        </Box>

        {/* Quick Start */}
        <Card.Root bg="#152852" color="white">
          <Card.Body p={6}>
            <Heading fontSize="lg" mb={4}>
              🚀 Quick Start Guide
            </Heading>
            <VStack align="stretch" gap={2}>
              <Text fontSize="sm">
                <strong>1. Start with Pages:</strong> Create essential pages like About, Contact, and FAQ
              </Text>
              <Text fontSize="sm">
                <strong>2. Add Your Content:</strong> Upload property listings (Shortlets) and tour packages
              </Text>
              <Text fontSize="sm">
                <strong>3. Upload Media:</strong> Add high-quality images to your media library
              </Text>
              <Text fontSize="sm">
                <strong>4. Configure Settings:</strong> Update contact details, social links, and preferences
              </Text>
              <Text fontSize="sm">
                <strong>5. Publish & Preview:</strong> Set content to 'Published' and preview on the live site
              </Text>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* FAQ Sections */}
        {sections.map((section) => {
          const IconComponent = section.icon;
          return (
            <Card.Root key={section.title}>
              <Card.Header borderBottom="1px" borderColor="#E5E5E5">
                <Heading fontSize="lg" color={section.color} display="flex" alignItems="center" gap={2}>
                  <IconComponent size={24} />
                  {section.title}
                </Heading>
              </Card.Header>
              <Card.Body p={6}>
                <Accordion.Root multiple>
                  {section.items.map((item, index) => (
                    <Accordion.Item key={index} value={`${section.title}-${index}`}>
                      <Accordion.ItemTrigger>
                        <Text fontWeight="medium" color="#2C2C2C">
                          {item.question}
                        </Text>
                      </Accordion.ItemTrigger>
                      <Accordion.ItemContent>
                        <Text color="gray.600" fontSize="sm">
                          {item.answer}
                        </Text>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </Card.Body>
            </Card.Root>
          );
        })}

        {/* Best Practices */}
        <Box>
          <Heading fontSize="xl" mb={4} color="#2C2C2C">
            Best Practices & Tips
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
            {bestPractices.map((practice) => {
              const IconComponent = practice.icon;
              return (
                <Card.Root key={practice.title}>
                  <Card.Body p={5}>
                    <Heading fontSize="md" mb={3} display="flex" alignItems="center" gap={2} color="#152852">
                      <IconComponent size={20} />
                      {practice.title}
                    </Heading>
                    <VStack align="stretch" gap={2}>
                      {practice.tips.map((tip, index) => (
                        <Text key={index} fontSize="sm" color="gray.600">
                          • {tip}
                        </Text>
                      ))}
                    </VStack>
                  </Card.Body>
                </Card.Root>
              );
            })}
          </Grid>
        </Box>

        {/* Need Help */}
        <Card.Root bg="#f0f0f0">
          <Card.Body p={6}>
            <Heading fontSize="lg" mb={2} color="#2C2C2C">
              Still Need Help?
            </Heading>
            <Text fontSize="sm" color="gray.600" mb={4}>
              If you have questions not covered in this guide, contact your website administrator or technical support team.
            </Text>
            <Text fontSize="xs" color="gray.500">
              Last updated: November 2024
            </Text>
          </Card.Body>
        </Card.Root>
      </VStack>
    </CMSLayout>
  );
}