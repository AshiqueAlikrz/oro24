import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useGetServicesByCategoryQuery } from "@/features/service/serviceApi";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { FallbackLogo } from "@/assets/images";
import ServiceTypeCard from "./ServiceTypeCard";
import ServiceDetails from "./ServiceDetails";
import ServiceCardSkeleton from "./ui/skeleton/ServiceCardSkeleton";

export type ServiceMaster = {
  ServiceMasterID: number;
  ServiceMasterName: string;
  Description: string;
  Icon: string;
  IconPath: string;
  HoverIconPath: string;
  ImagePath: string;
  IsActive: boolean;
  CreatedBy: string | null;
  CreatedDate: string;
};

export type ServicesCarouselProps = {
  servicesData: ServiceMaster[];
  servicesLoading: boolean;
  servicesError: any;
};

const ServicesCarousel = ({ servicesData, servicesLoading, servicesError }: ServicesCarouselProps) => {
  const [page, setPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  useEffect(() => {
    if (servicesData && servicesData.length > 0) {
      setSelectedServiceId(servicesData[0].ServiceMasterID);
    }
  }, [servicesData]);

  const {
    data: serviceDataByCategory,
    error: serviceDataByCategoryError,
    isLoading: serviceDataByCategoryLoading,
  } = useGetServicesByCategoryQuery(selectedServiceId ? { ServiceMasterID: selectedServiceId, PageNumber: page, PageSize: 2 } : skipToken);

  useEffect(() => {
    if (selectedServiceId !== null) {
      setPage(1);
    }
  }, [selectedServiceId]);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-8 md:py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 font-semibold">Our Services</h1>

      {servicesError && <p className="text-red-500 mb-4">Failed to load services</p>}

      <Carousel opts={{ align: "start", loop: false }} className="w-full">
        <div className="flex justify-end gap-2 mb-4">
          <CarouselPrevious className="static translate-y-0 border-none" />
          <CarouselNext className="static translate-y-0 border-none" />
        </div>

        <CarouselContent className="-ml-2 md:-ml-4">
          {servicesLoading &&
            Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem key={i} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="h-32 sm:h-36 md:h-40 rounded-xl bg-gray-200 animate-pulse" />
              </CarouselItem>
            ))}

          {!servicesLoading &&
            servicesData &&
            servicesData.map((service, index) => (
              <CarouselItem key={service.ServiceMasterID} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div
                  onClick={() => {
                    setSelectedIndex(index);
                    setSelectedServiceId(service.ServiceMasterID);
                  }}
                  className={`cursor-pointer rounded-xl transition-all flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 h-32 sm:h-36 md:h-40
                  ${index === selectedIndex ? "bg-primary-grey shadow-xl" : "bg-gray-100 hover:bg-gray-200"}`}
                >
                  <img src={FallbackLogo} alt={service.ServiceMasterName} className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 object-contain" />
                  <p
                    className={`text-center font-semibold text-[10px] sm:text-xs truncate w-full
                    ${index === selectedIndex ? "text-white" : "text-gray-900"}`}
                  >
                    {service.ServiceMasterName}
                  </p>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-6 sm:mt-8 md:mt-10 flex w-full gap-4 sm:gap-6 flex-col lg:flex-row">
        <div className="flex-1 w-full lg:max-w-[50%]">
          <h1 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 font-semibold">Service Type</h1>

          {serviceDataByCategoryLoading ? (
            <ServiceCardSkeleton />
          ) : serviceDataByCategoryError ? (
            <p className="text-red-500">Failed to load service types</p>
          ) : (
            <ServiceTypeCard onSelect={setSelectedServiceId} data={serviceDataByCategory} totalPage={serviceDataByCategory?.[0]?.TotalPages || 1} pageNumber={page} setPageNumber={setPage} />
          )}
        </div>

        <div className="flex-1 w-full lg:max-w-[50%]">
          <h1 className="text-xl mx-5 sm:text-2xl md:text-3xl mb-3 sm:mb-4 font-semibold">Service Detail</h1>
          <ServiceDetails />
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
