import { useState } from "react";
import { Clock, Users, Home, CirclePlus } from "lucide-react";
import { Button } from "./ui/button";
import AEDSymbol from "@/assets/svg/aedSymbol.svg";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { getPaginationRange } from "@/lib/utils";
import { FallbackImage } from "@/assets/images";

const ServiceTypeCard = ({ onSelect, data, totalPage, pageNumber, setPageNumber }: any) => {
  const [selectedId, setSelectedId] = useState(null);
  const [page, setPage] = useState<number>(1);

  const handleSelect = (service: any) => {
    setSelectedId(service.ServiceID);
    onSelect?.(service.id);
  };

  return (
    <div className="space-y-6 mt-10">
      {data &&
        data.map((service: any) => {
          const isSelected = selectedId === service.ServiceID;

          return (
            <div
              key={service.id}
              onClick={() => handleSelect(service)}
              className={`flex flex-col w-full cursor-pointer items-center justify-between rounded-xl sm:rounded-2xl border transition
              ${isSelected ? "bg-primary-yellow/20 " : "border-gray-200"}
            `}
            >
              <div className="flex flex-col  xl:flex-row gap-3 sm:gap-4 md:gap-6 p-4 sm:p-5 md:p-7 w-full">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-1">
                  <div className="h-32 sm:h-36 md:h-40 w-full sm:w-40 md:w-48 overflow-hidden rounded-xl flex-shrink-0">
                    <img src={FallbackImage} alt={service.ServiceMasterName} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      {service.badge && <span className="inline-block rounded-full bg-primary-yellow px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-white">{service.badge}</span>}

                      <h2 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-gray-900">{service.ServiceName}</h2>

                      <p className="mt-2 text-xs sm:text-sm text-gray-600">{service.Description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 sm:gap-4 flex-shrink-0">
                  <div className="text-left sm:text-right">
                    <p className="text-xs sm:text-sm text-gray-500">From only*</p>
                    <p className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center sm:justify-end">
                      <img src={AEDSymbol} alt="AED" className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      {service.BasePrice}
                    </p>
                  </div>

                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(service);
                    }}
                    className={`flex items-center gap-2 rounded-lg border px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition whitespace-nowrap
                   bg-white border-gray-900 text-black hover:bg-gray-900 hover:text-white
                  `}
                  >
                    <CirclePlus className="w-4 h-4 sm:w-5 sm:h-5" />
                    ADD
                  </Button>
                </div>
              </div>

              <div
                className={`${
                  isSelected ? "bg-amber-50/90 " : "border-gray-200"
                } flex flex-wrap rounded-b-xl sm:rounded-b-2xl gap-2 sm:gap-3 border-t p-2 sm:p-3 text-xs sm:text-sm text-gray-600 w-full`}
              >
                <span className="flex items-center gap-1 sm:gap-2 rounded-full bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="whitespace-nowrap">{service.EstimatedDuration}</span>
                </span>

                <span className="flex items-center gap-1 sm:gap-2 rounded-full bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="whitespace-nowrap">{service.cleaners} Cleaners</span>
                </span>

                <span className="flex items-center gap-1 sm:gap-2 rounded-full bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2">
                  <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="whitespace-nowrap">{service.space}</span>
                </span>
              </div>
            </div>
          );
        })}
      <Pagination className="flex justify-end">
        <PaginationContent>
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious onClick={() => setPageNumber((p: number) => Math.max(p - 1, 1))} className={pageNumber === 1 ? "pointer-events-none opacity-50" : ""} />
          </PaginationItem>

          {/* Page Numbers */}
          {getPaginationRange({ current: pageNumber, total: totalPage }).map((item, index) =>
            item === "..." ? (
              <PaginationItem key={`dots-${index}`}>
                <span className="px-3 text-gray-500">...</span>
              </PaginationItem>
            ) : (
              <PaginationItem key={item}>
                <PaginationLink
                  isActive={pageNumber === item}
                  onClick={() => setPageNumber(item)}
                  className={`cursor-pointer ${pageNumber === item ? "bg-primary-yellow text-white hover:border-primary-yellow" : ""}`}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext onClick={() => setPageNumber((p: number) => Math.min(p + 1, totalPage))} className={pageNumber === totalPage ? "pointer-events-none opacity-50" : ""} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ServiceTypeCard;
