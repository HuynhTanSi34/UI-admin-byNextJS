import SideNav from "../ui/sidenav";
import Header from "../ui/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen md:flex-row md:overflow-hidden bg-gray-200">
      <div className="h-auto">
        <Header />
      </div>
      <div className="flex  flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-58">
          <SideNav />
        </div>
        <div className="flex-grow overflow-y-hidden">{children}</div>
      </div>
    </div>
  );
}
