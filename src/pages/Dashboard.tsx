import CaroselSection from "@/components/CaroselSection";
import ServicesCarousel from "@/components/Services";
import { useGetAllServicesQuery } from "@/features/service/serviceApi";

const Dashboard = () => {
  const { data, error, isLoading } = useGetAllServicesQuery();
  return (
    <div className="w-full flex flex-col">
      <section className="w-full ">
        <CaroselSection />
      </section>
      <section className="w-full  lg:px-16 px-0">
        <ServicesCarousel servicesData={data} servicesLoading={isLoading} servicesError={error} />
      </section>
    </div>
  );
};

export default Dashboard;
