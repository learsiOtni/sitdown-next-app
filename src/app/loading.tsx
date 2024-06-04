import Spinner from "@/components/Spinner/Spinner";

export default function Loading() {
    return (
        <div className="flex-center w-full h-screen">
            <Spinner className="w-15 h-15" showText/>
        </div>
    )
}