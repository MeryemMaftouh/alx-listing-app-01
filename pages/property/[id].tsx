// pages/property/[id].tsx
import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const pid = typeof id === "string" ? decodeURIComponent(id) : "";

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === pid);

  if (!property) return <p className="p-6">Property not found</p>;

  return (
    <div className="container mx-auto px-4 lg:px-6 py-6">
      {/* Top: details + booking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PropertyDetail property={property} />
        </div>
        <aside className="lg:col-span-1">
          <BookingSection price={property.price} />
        </aside>
      </div>

      {/* Reviews (pass your array if you have one) */}
      <ReviewSection reviews={(property as any).reviews || []} />
    </div>
  );
}
