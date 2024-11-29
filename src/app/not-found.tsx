import { Container } from "@mui/material";
import heroimage from "../../public/heroimage.svg";
import Link from "next/link";
import AnimatedWrapper from "@/components/MotionWrapper";

export default function NotFound() {
  return (
    <div>
      <Container maxWidth="xl">
        <div
          style={{
            backgroundImage: `url(${heroimage.src})`,
            height: "calc(100vh - 96px)",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            marginBottom: "100px",
          }}
          className="rounded-3xl"
        >
          <h1 className="md:text-9xl text-7xl font-medium font-Michroma text-[#45E7FF] ">
            404
          </h1>
          <div className="uppercase font-Michroma md:text-4xl text-2xl text-center">
            Page not found
          </div>
          <AnimatedWrapper from="bottom">
            <Link href="/">
              <button className="px-8 py-[18px] tracking-widest uppercase button genbutton">
                Back to home
              </button>
            </Link>
          </AnimatedWrapper>
        </div>
      </Container>
    </div>
  );
}
