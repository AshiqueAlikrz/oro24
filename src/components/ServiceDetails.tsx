import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AEDSymbol from "@/assets/svg/aedSymbol.svg";
import { FallbackImage } from "@/assets/images";

const ServiceDetails = ({ data }: any) => {
  const service = {
    title: "Premium Deep Cleaning",
    price: 329.99,
    image: "/cleaning.jpg",
    description: [
      "Our Premium Deep Cleaning service is a top-to-bottom intensive cleaning solution designed to restore the freshness, hygiene, and appearance of your home or office.",
      "It goes far beyond regular cleaning and is ideal for move-ins/outs, seasonal cleaning, post-renovation, or deep sanitation.",
    ],
    timing: [
      {
        propertyType: "1 BR",
        duration: "3–4 hours",
        teamSize: "2–3 Cleaners",
      },
    ],
    includes: ["Bedrooms & Living Areas", "Kitchen", "Bathrooms", "Extras (upon request or additional charge)"],
  };

  return (
    <div className="mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <Card className="rounded-xl sm:rounded-2xl">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <CardTitle className="text-base sm:text-lg font-semibold">{service.title}</CardTitle>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center">
            <img src={AEDSymbol} alt="AED" className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            {service.price}
          </p>
        </CardHeader>

        <CardContent className="space-y-4 sm:space-y-6">
          <div className="overflow-hidden rounded-lg sm:rounded-xl">
            <img src={FallbackImage} alt={service.title} className="h-40 sm:h-48 md:h-56 w-full object-cover" />
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xs sm:text-sm font-semibold">Service Description:</h3>
            {service.description.map((text, index) => (
              <p key={index} className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Service Timing & Duration:</h3>

            <div className="rounded-md border">
              <Table>
                <TableHeader className="rounded-tl-3xl">
                  <TableRow className="bg-black hover:bg-gray-800 ">
                    <TableHead className="text-white">Property Type</TableHead>
                    <TableHead className="text-white">Estimated Duration</TableHead>
                    <TableHead className="text-white">Team Size</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {service.timing.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.propertyType}</TableCell>
                      <TableCell>{item.duration}</TableCell>
                      <TableCell>{item.teamSize}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold">What’s Included:</h3>

            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {service.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <Button variant="outline" className="w-full rounded-xl py-6 text-base">
            ＋ ADD
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceDetails;
