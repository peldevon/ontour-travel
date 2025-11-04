"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Input,
  VStack,
  Icon,
  Card,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Lock, Mail, Plane } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MotionBox = motion.create(Box);

export default function AdminLoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage
        localStorage.setItem("admin_token", data.token);
        router.push("/admin/dashboard");
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="md">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card.Root bg="white" p={8} boxShadow="xl" borderRadius="xl">
            <Card.Body>
              {/* Logo & Title */}
              <VStack gap={2} mb={8} textAlign="center">
                <Icon as={Plane} boxSize={12} color="blue.600" />
                <Heading as="h1" fontSize="2xl" color="gray.900">
                  Ontour Travels CMS
                </Heading>
                <Text color="gray.600">Admin Login</Text>
              </VStack>

              {/* Login Form */}
              <form onSubmit={handleLogin}>
                <VStack gap={4} align="stretch">
                  {error && (
                    <Box bg="red.50" border="1px" borderColor="red.200" borderRadius="md" p={3}>
                      <Text color="red.700" fontSize="sm">{error}</Text>
                    </Box>
                  )}

                  <Box>
                    <Text fontWeight="medium" mb={2} color="gray.700">Email</Text>
                    <Input
                      type="email"
                      placeholder="admin@ontourtravels.com.ng"
                      size="lg"
                      value={credentials.email}
                      onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                      required
                    />
                  </Box>

                  <Box>
                    <Text fontWeight="medium" mb={2} color="gray.700">Password</Text>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      size="lg"
                      value={credentials.password}
                      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                      required
                    />
                  </Box>

                  <Button
                    type="submit"
                    colorPalette="blue"
                    size="lg"
                    w="full"
                    loading={loading}
                    leftIcon={<Lock />}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>

                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    Default credentials:<br />
                    Email: admin@ontourtravels.com.ng<br />
                    Password: admin123
                  </Text>
                </VStack>
              </form>
            </Card.Body>
          </Card.Root>
        </MotionBox>
      </Container>
    </Box>
  );
}
