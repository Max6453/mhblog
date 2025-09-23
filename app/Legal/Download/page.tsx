'use client'
import Header from "@/components/main/header"
export default function Download() {
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className="relative top-20 text-center ">
                <p className="font-Exo-2 text-3xl">
                    By clicking this button, our app will start to download.
                </p>
                <p className="text-xl pt-5">
                    NOTE: it is still in experimental phase so do not be scared by its name. It is completely secured.
                </p>
                <button
                onClick={() => {
                  window.location.href =
                    "https://expo.dev/artifacts/eas/8kJJ4bVGgiuAPKuDPNdGW6.aab"; // <-- APK link
                }}
                className="px-6 py-3 top-20 right-4 relative font-Exo-2 bg-background hover:bg-white text-white hover:text-black border-white border rounded-xl shadow-lg z-50 transition"
              >
                Download
              </button>
            </div>
        </div>
    )
}