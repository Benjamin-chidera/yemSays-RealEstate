import { Link } from "react-router-dom";
import { PiHouse } from "react-icons/pi";
import { DashboardPro } from "../../components/admin/DashboardPro";
import { PropertyCard } from "../../components/admin/PropertyCard";
import { ReviewsCard } from "../../components/admin/ReviewsCard";
import { customer } from "../../data/RecentCustomers";
import { CustomerCard } from "../../components/admin/CustomerCard";


export const DashBoard = () => {
  return (
    <section className=" text-white container mx-auto w-full">
      <header className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl">Dashboard</h1>
        <div className="flex gap-2 items-center">
          <Link className="flex gap-2 items-center">
            <PiHouse /> Home
          </Link>{" "}
          / <p>DashBoard</p>
        </div>
      </header>
      <DashboardPro />

      <main className=" gap-5 md:flex  my-5">
        <section className="md:w-[690px]  md:h-[700px] bg-[#181818] rounded-[10px]">
          <div className="flex justify-between gap-5 items-center text-sm p-5">
            <h1 className="font-bold text-lg">Recently Added Properties</h1>
            <Link className="text-[#F78214]">View All Properties</Link>
          </div>

          <PropertyCard />

          <div className="mt-5 overflow-x-scroll md:overflow-hidden">
            {/* recent customers */}
            <CustomerCard />
          </div>
        </section>

        <section className="md:w-[349px]  mt-10 md:mt-0  bg-[#181818] pb-4 px-5 rounded-[10px]">
          {/* customers reviews */}
          <div className="flex justify-between gap-5 items-center text-sm">
            <h1 className="font-bold text-lg">Reviews</h1>
            <Link className="text-[#F78214]">View All</Link>
          </div>

          <ReviewsCard />
        </section>
      </main>
    </section>
  );
};