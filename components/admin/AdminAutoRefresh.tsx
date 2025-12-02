"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface AdminAutoRefreshProps {
  refreshInterval?: number; // in milliseconds, default 5 minutes
}

/**
 * Client component that automatically refreshes the admin page data
 * at regular intervals to ensure stats stay up-to-date
 */
export function AdminAutoRefresh({ refreshInterval = 5 * 60 * 1000 }: AdminAutoRefreshProps) {
  const router = useRouter();

  useEffect(() => {
    // Refresh every 5 minutes (default) to get latest stats
    const interval = setInterval(() => {
      router.refresh();
    }, refreshInterval);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [router, refreshInterval]);

  return null; // This component doesn't render anything
}
