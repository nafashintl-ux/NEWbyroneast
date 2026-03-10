import { useNavigate, useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const routeLabels: Record<string, string> = {
  "/about": "About",
  "/contact": "Contact",
};

const PageHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs: { label: string; path: string }[] = [];

  let accumulated = "";
  for (const seg of segments) {
    accumulated += `/${seg}`;
    if (accumulated === "/services") {
      crumbs.push({ label: "Services", path: "" });
    } else {
      crumbs.push({
        label: routeLabels[accumulated] || seg.replace(/-/g, " "),
        path: accumulated,
      });
    }
  }

  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 pt-24 sm:px-6 lg:pt-28">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Go back"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back
      </button>
      <span className="text-border">|</span>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="text-xs uppercase tracking-widest">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="contents">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {i === crumbs.length - 1 || !crumb.path ? (
                  <BreadcrumbPage className="text-xs uppercase tracking-widest">
                    {crumb.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.path} className="text-xs uppercase tracking-widest">
                      {crumb.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default PageHeader;
