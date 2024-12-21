import Appointment from "./homeComponents/Appointment";
import DoctorSection from "./homeComponents/DoctorSection";
import Header from "./homeComponents/Header";
import OurServices from "./homeComponents/OurServices";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Our Services */}
      <OurServices />

      {/* our special doctors */}
      <DoctorSection />

      {/* Get a Quote Today */}
      <Appointment />
    </main>
  );
}
