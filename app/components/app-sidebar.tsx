import * as React from "react"
import {
  BookOpen,
  Bot, CalendarIcon,
  Command,
  DollarSignIcon, FolderIcon,
  Frame,
  LifeBuoy,
  Map, MessageSquareMoreIcon, PackageIcon,
  PieChart,
  Send,
  Settings2,
  SquareTerminal, UsersIcon,
} from "lucide-react"

import { NavMain } from "~/components/nav-main"
import { NavProjects } from "~/components/nav-projects"
import { NavSecondary } from "~/components/nav-secondary"
import { NavUser } from "~/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar"

const data = {
  user: {
    name: "Admin",
    email: "admin@example.com",
    avatar: "/avatars/admin.jpg",
  },
  navMain: [
    {
      title: "Data Master",
      url: "#",
      icon: FolderIcon,
      items: [
        { title: "Modul negara", url: "/modul-negara" },
        { title: "Modul provinsi", url: "/modul-provinsi" },
        { title: "Modul kota", url: "/modul-kota" },
        { title: "Modul kecamatan", url: "/modul-kecamatan" },
        { title: "Modul kelurahan", url: "/modul-kelurahan" },
        { title: "Modul jenis pekerjaan", url: "/modul-jenis-pekerjaan" },
        { title: "Modul kategori barang", url: "/modul-kategori-barang" },
        { title: "Modul jenis barang", url: "/modul-jenis-barang" },
        { title: "Modul jenis objek", url: "/modul-jenis-objek" },
        { title: "Modul file", url: "/modul-file" },
      ],
    },
    {
      title: "KPKLN & Penyelenggara",
      url: "#",
      icon: FolderIcon,
      items: [
        { title: "Modul KPKLN", url: "/modul-kpknl" },
        { title: "Modul penyelenggara", url: "/modul-penyelenggara" },
      ],
    },
    {
      title: "Pengguna dan Penjual",
      url: "#",
      icon: UsersIcon,
      items: [
        { title: "Modul pengguna", url: "/modul-pengguna" },
        { title: "Modul penjual", url: "/modul-penjual" },
      ],
    },
    {
      title: "Barang dan Foto Barang",
      url: "#",
      icon: PackageIcon,
      items: [
        { title: "Modul barang", url: "/modul-barang" },
        { title: "Modul foto barang", url: "/modul-foto-barang" },
      ],
    },
    {
      title: "Lelang dan Konten Lelang",
      url: "#",
      icon: CalendarIcon,
      items: [
        { title: "Modul lelang", url: "/modul-lelang" },
        { title: "Modul konten lelang", url: "/modul-konten-lelang" },
      ],
    },
    {
      title: "Peserta Lelang dan Penawaran",
      url: "#",
      icon: MessageSquareMoreIcon,
      items: [
        { title: "Modul peserta lelang", url: "/modul-peserta-lelang" },
        { title: "Modul penawaran", url: "/modul-penawaran" },
      ],
    },
    {
      title: "Hasil Lelang dan Pembayaran",
      url: "#",
      icon: DollarSignIcon,
      items: [
        { title: "Modul hasil lelang", url: "/modul-hasil-lelang" },
        { title: "Modul pembayaran", url: "/modul-pembayaran" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/*<NavProjects projects={data.projects} />*/}
        {/*<NavSecondary items={data.navSecondary} className="mt-auto" />*/}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
