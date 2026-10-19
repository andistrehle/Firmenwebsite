import type { NextConfig } from "next";
import { BASE_PATH } from "./lib/site-config";

const nextConfig: NextConfig = {
  // Leer im Normalfall; für ein Unterverzeichnis NEXT_PUBLIC_BASE_PATH setzen.
  basePath: BASE_PATH,
};

export default nextConfig;
