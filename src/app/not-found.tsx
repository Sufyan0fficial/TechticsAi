import { Container } from "@mui/material";
import heroimage from "../../public/heroimage.svg";
import Link from "next/link";

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
          <Link href="/">
            <button
              style={{
                background:
                  "linear-gradient(111.77deg, #0056F8 33.94%, #45E7FF 80.93%)",
              }}
              className="px-10 py-3 tracking-widest uppercase"
            >
              Back to home
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
