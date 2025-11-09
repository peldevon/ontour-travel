"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Card,
  Image,
  Grid,
  HStack,
  VStack,
  Link,
  Badge,
  Tabs,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { 
  Plane, 
  MapPin,
  Calendar,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  Shield,
  MessageCircle,
  Star,
  Globe,
  Home,
  Map,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card.Root);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

interface Tour {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  duration_days: number;
  duration_nights: number;
  price_from_ngn: number;
  price_from_usd: number;
  short_description: string;
  highlights: string[];
  gallery: string[];
  seasonality: string;
  status: string;
}

export default function ToursPage() {
  const router = useRouter();
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("/api/tours");
        if (response.ok) {
          const data = await response.json();
          setTours(data.tours || []);
        }
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  const filteredTours = activeCategory === "all" 
    ? tours 
    : tours.filter(t => t.category === activeCategory);

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box
        position="sticky"
        top={0}
        zIndex={50}
        bg="white"
        boxShadow="sm"
      >
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            <HStack gap={2} as="a" href="/">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ontour_logo-removebg-preview-1762616230494.png?width=8000&height=8000&resize=contain"
                alt="Ontour Travels Logo"
                h="60px"
                w="auto"
                objectFit="contain"
              />
            </HStack>
            <HStack gap={6} display={{ base: "none", md: "flex" }}>
              <Link href="/" color="#2C2C2C" _hover={{ color: "#152852" }}>Home</Link>
              <Link href="/book" color="#2C2C2C" _hover={{ color: "#152852" }}>Flights & Hotels</Link>
              <Link href="/shortlets" color="#2C2C2C" _hover={{ color: "#152852" }}>Shortlets</Link>
              <Link href="/about" color="#2C2C2C" _hover={{ color: "#152852" }}>About</Link>
              <Link href="/contact" color="#2C2C2C" _hover={{ color: "#152852" }}>Contact</Link>
              <Button bg="#152852" color="white" _hover={{ bg: "#0d1a35" }} size="sm" as="a" href="https://wa.me/2348123456789" target="_blank">
                <MessageCircle size={16} style={{ marginRight: '4px' }} />
                WhatsApp
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <MotionBox
        bg="#152852"
        color="white"
        py={20}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container maxW="7xl" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading as="h1" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" mb={4}>
              Curated Tours & Experiences
            </Heading>
            <Text fontSize="xl" color="#FAFAFA" mb={8}>
              From weekend escapes to international adventures—tailored for you
            </Text>
            <HStack gap={4} justify="center">
              <Button bg="white" color="#152852" _hover={{ bg: "gray.100" }} size="lg" onClick={() => document.getElementById('tours-grid')?.scrollIntoView({ behavior: 'smooth' })}>
                View Packages
              </Button>
              <Button variant="outline" borderColor="white" color="white" size="lg" _hover={{ bg: "whiteAlpha.200" }} as="a" href="https://wa.me/2348123456789?text=Hi%20Ontour,%20I'd%20like%20to%20plan%20a%20custom%20trip" target="_blank">
                Plan Custom Trip
              </Button>
            </HStack>
          </MotionBox>
        </Container>
      </MotionBox>

      {/* Category Tabs */}
      <Box bg="white" borderBottom="1px" borderColor="gray.200">
        <Container maxW="7xl" py={6}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Tabs.Root value={activeCategory} onValueChange={(e) => setActiveCategory(e.value)}>
              <Tabs.List>
                <Tabs.Trigger value="all" fontWeight="medium">
                  All Tours
                </Tabs.Trigger>
                <Tabs.Trigger value="local" fontWeight="medium">
                  <Home size={20} style={{ marginRight: '8px' }} />
                  Local (Nigeria)
                </Tabs.Trigger>
                <Tabs.Trigger value="regional" fontWeight="medium">
                  <Map size={20} style={{ marginRight: '8px' }} />
                  Regional (Africa)
                </Tabs.Trigger>
                <Tabs.Trigger value="international" fontWeight="medium">
                  <Globe size={20} style={{ marginRight: '8px' }} />
                  International
                </Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>
          </MotionBox>
        </Container>
      </Box>

      {/* Tours Grid */}
      <Container maxW="7xl" py={16} id="tours-grid">
        {loading ? (
          <Text textAlign="center" fontSize="xl" color="gray.600">
            Loading tours...
          </Text>
        ) : filteredTours.length === 0 ? (
          <Text textAlign="center" fontSize="xl" color="gray.600">
            No tours available in this category.
          </Text>
        ) : (
          <MotionBox
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} router={router} />
              ))}
            </Grid>
          </MotionBox>
        )}
      </Container>

      {/* Custom Trip Planner */}
      <Box bg="#152852" color="white" py={20}>
        <Container maxW="4xl">
          <MotionBox
            textAlign="center"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Heading as="h2" fontSize="3xl" mb={4}>
              Don't See What You're Looking For?
            </Heading>
            <Text fontSize="lg" color="#FAFAFA" mb={8}>
              Tell us your dream destination and we'll create a custom itinerary just for you
            </Text>
            <HStack gap={4} justify="center" flexWrap="wrap">
              <Button
                as="a"
                href="https://wa.me/2348123456789?text=Hi%20Ontour,%20I'd%20like%20to%20plan%20a%20custom%20trip"
                target="_blank"
                bg="#25D366"
                color="white"
                _hover={{ bg: "#1da851" }}
                size="lg"
              >
                <MessageCircle size={20} style={{ marginRight: '8px' }} />
                Plan My Custom Trip
              </Button>
              <Button
                as="a"
                href="/contact"
                variant="outline"
                borderColor="white"
                color="white"
                size="lg"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                Contact Us
              </Button>
            </HStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Why Book With Us */}
      <Container maxW="7xl" py={20}>
        <MotionBox
          textAlign="center"
          mb={12}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Heading as="h2" fontSize="3xl" mb={4}>
            Why Travel with Ontour
          </Heading>
          <Text fontSize="lg" color="gray.600">
            We take care of every detail so you can focus on the experience
          </Text>
        </MotionBox>

        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
            <FeatureCard
              icon={Shield}
              title="IATA Certified"
              description="Powered by Amadeus for reliable bookings"
            />
            <FeatureCard
              icon={Users}
              title="Expert Guides"
              description="Knowledgeable local guides on every tour"
            />
            <FeatureCard
              icon={CheckCircle}
              title="All-Inclusive"
              description="Accommodation, meals, and activities included"
            />
            <FeatureCard
              icon={MessageCircle}
              title="24/7 Support"
              description="WhatsApp support throughout your journey"
            />
          </Grid>
        </MotionBox>
      </Container>

      {/* FAQ Section */}
      <Box bg="white" py={16}>
        <Container maxW="4xl">
          <MotionBox
            textAlign="center"
            mb={12}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Heading as="h2" fontSize="3xl" mb={4}>
              Frequently Asked Questions
            </Heading>
          </MotionBox>

          <MotionBox
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <VStack gap={4} align="stretch">
              <FAQItem
                question="Do package prices include flights?"
                answer="Some packages include flights, while others are land-only. We always clearly state what's included in each package description."
              />
              <FAQItem
                question="Can dates be changed after booking?"
                answer="Yes, dates can be modified subject to availability and change fees. Contact us as soon as possible if you need to make changes."
              />
              <FAQItem
                question="What is your payment schedule?"
                answer="Typically, we require 50% deposit to secure your booking, with the balance due 14 days before departure."
              />
              <FAQItem
                question="Do you assist with visas?"
                answer="Yes! We provide visa support for all our international packages, including document lists and application assistance."
              />
              <FAQItem
                question="Can I customize the itinerary?"
                answer="Absolutely! We can customize any package to match your preferences. Just let us know what you'd like to add or remove."
              />
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="#2C2C2C" color="white" py={12}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
            <Box>
              <HStack gap={2} mb={4}>
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ontour_logo-removebg-preview-1762616230494.png?width=8000&height=8000&resize=contain"
                  alt="Ontour Travels Logo"
                  h="40px"
                  w="auto"
                  objectFit="contain"
                />
              </HStack>
              <Text color="#E5E5E5" fontSize="sm">
                Creating unforgettable travel experiences for Nigerian travelers.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" fontSize="lg" fontWeight="bold" mb={4}>Quick Links</Heading>
              <VStack align="start" gap={2}>
                <Link href="/" color="#E5E5E5" _hover={{ color: "white" }}>Home</Link>
                <Link href="/book" color="#E5E5E5" _hover={{ color: "white" }}>Flights & Hotels</Link>
                <Link href="/shortlets" color="#E5E5E5" _hover={{ color: "white" }}>Shortlets</Link>
                <Link href="/about" color="#E5E5E5" _hover={{ color: "white" }}>About</Link>
              </VStack>
            </Box>
            <Box>
              <Heading as="h3" fontSize="lg" fontWeight="bold" mb={4}>Support</Heading>
              <VStack align="start" gap={2}>
                <Link href="/contact" color="#E5E5E5" _hover={{ color: "white" }}>Contact Us</Link>
                <Link href="/faq" color="#E5E5E5" _hover={{ color: "white" }}>FAQ</Link>
                <Link href="/terms" color="#E5E5E5" _hover={{ color: "white" }}>Terms & Conditions</Link>
                <Link href="/privacy" color="#E5E5E5" _hover={{ color: "white" }}>Privacy Policy</Link>
              </VStack>
            </Box>
            <Box>
              <Heading as="h3" fontSize="lg" fontWeight="bold" mb={4}>Contact</Heading>
              <VStack align="start" gap={2}>
                <Text color="#E5E5E5" fontSize="sm">+234 812 345 6789</Text>
                <Text color="#E5E5E5" fontSize="sm">info@ontourtravels.com.ng</Text>
                <Text color="#E5E5E5" fontSize="sm">Mon–Sat, 9 AM – 6 PM WAT</Text>
              </VStack>
            </Box>
          </Grid>
          <Box borderTop="1px" borderColor="gray.800" pt={8} mt={8} textAlign="center" color="#E5E5E5">
            <Text fontSize="sm">&copy; 2024 Ontour Travels. All rights reserved. Made with <Text as="span" color="red.500">💓</Text> by <Link href="https://github.com/peldevon" target="_blank" rel="noopener noreferrer" _hover={{ color: "#C9A449" }}>Peldevon</Link></Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

function TourCard({ tour, router }: { tour: Tour; router: any }) {
  const categoryColors: any = {
    "international": "purple",
    "regional": "green",
    "local": "blue"
  };

  const handleViewDetails = () => {
    router.push(`/tours/${tour.slug}`);
  };

  return (
    <MotionCard
      overflow="hidden"
      cursor="pointer"
      variants={fadeInUp}
      whileHover={{ y: -10, boxShadow: "2xl" }}
      transition={{ duration: 0.3 }}
      bg="white"
    >
      <Box position="relative" h="64" overflow="hidden">
        <Image 
          src={tour.gallery[0]}
          alt={tour.title}
          w="full"
          h="full"
          objectFit="cover"
        />
        <Box position="absolute" top={4} right={4} px={3} py={1} bg={`${categoryColors[tour.category]}.600`} color="white" borderRadius="md" fontSize="sm" fontWeight="medium">
          {tour.category.toUpperCase()}
        </Box>
      </Box>
      <Card.Body p={6}>
        <Heading as="h3" fontSize="xl" fontWeight="bold" mb={2} color="#2C2C2C">
          {tour.title}
        </Heading>
        <HStack gap={4} mb={4}>
          <HStack gap={1}>
            <Clock size={16} color="#6B7280" />
            <Text fontSize="sm" color="gray.600">{tour.duration_days}D/{tour.duration_nights}N</Text>
          </HStack>
          <HStack gap={1}>
            <Calendar size={16} color="#6B7280" />
            <Text fontSize="sm" color="gray.600">{tour.seasonality.includes(':') ? tour.seasonality.split(':')[1].trim() : tour.seasonality}</Text>
          </HStack>
        </HStack>
        <VStack align="start" gap={2} mb={4}>
          {tour.highlights.slice(0, 3).map((highlight: string) => (
            <HStack key={highlight} gap={2}>
              <CheckCircle size={16} color="#10B981" />
              <Text fontSize="sm" color="gray.700">{highlight}</Text>
            </HStack>
          ))}
        </VStack>
        <Box borderTop="1px" borderColor="gray.200" pt={4} mt={4}>
          <Flex justify="space-between" align="center" mb={4}>
            <Box>
              <Text fontSize="xs" color="gray.500">From</Text>
              <Text fontSize="2xl" fontWeight="bold" color="#152852">₦{tour.price_from_ngn.toLocaleString()}</Text>
            </Box>
          </Flex>
          <Flex gap={2}>
            <Button bg="#152852" color="white" _hover={{ bg: "#0d1a35" }} flex={1} onClick={handleViewDetails}>
              View Details
            </Button>
            <Button
              as="a"
              href={`https://wa.me/2348123456789?text=Hi%20Ontour,%20I'm%20interested%20in%20the%20${encodeURIComponent(tour.title)}%20tour`}
              target="_blank"
              variant="outline"
              colorPalette="green"
            >
              <MessageCircle size={20} />
            </Button>
          </Flex>
        </Box>
      </Card.Body>
    </MotionCard>
  );
}

function FeatureCard({ icon: IconComponent, title, description }: any) {
  return (
    <MotionBox
      variants={fadeInUp}
      textAlign="center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Flex direction="column" align="center" gap={3}>
        <Box
          w={16}
          h={16}
          bg="#f0f0f0"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <IconComponent size={32} color="#152852" />
        </Box>
        <Heading as="h3" fontSize="lg" fontWeight="bold">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
      </Flex>
    </MotionBox>
  );
}

function FAQItem({ question, answer }: any) {
  return (
    <MotionCard
      variants={fadeInUp}
      bg="white"
      p={6}
      borderRadius="lg"
    >
      <Card.Body>
        <Heading as="h4" fontSize="md" fontWeight="bold" mb={2} color="#2C2C2C">
          {question}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {answer}
        </Text>
      </Card.Body>
    </MotionCard>
  );
}