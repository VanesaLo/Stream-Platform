import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Film, Search, Heart } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function MenuSideBar() {
  return (
    <aside className="w-16 flex  flex-col items-center py-6 border-r border-gray-800">
      <Link href="/">
        <Button variant="ghost" size="icon" className="mb-8">
          <Film className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/search">
        <Button variant="ghost" size="icon" className="mb-4">
          <Search className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/favorites">
        <Button variant="ghost" size="icon">
          <Heart className="h-6 w-6" />
        </Button>
      </Link>
      <ThemeToggle />
    </aside>
  );
}
