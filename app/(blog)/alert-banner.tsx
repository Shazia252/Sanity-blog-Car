// "use client";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

// export default function AlertBanner() {
//   // const router = useRouter();
//   // const [pending, startTransition] = useTransition();

//   // const shouldShow = useSyncExternalStore(
//   //   emptySubscribe,
//   //   () => window.top === window,
//   //   () => false,
//   // );

//   // if (!shouldShow) return null;

//   return (
//     <div
//       className="fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur"
//     >
//       <div className="py-2 text-center font-bold text-sm">
//         My Blog!
//       </div>
//     </div>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import { useSyncExternalStore, useTransition } from "react";

import { disableDraftMode } from "./actions";

const emptySubscribe = () => () => {};

export default function AlertBanner() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const shouldShow = useSyncExternalStore(
    emptySubscribe,
    () => window.top === window,
    () => false
  );

  if (!shouldShow) return null;

  const handleDisableDraftMode = async () => {
    await disableDraftMode();
    startTransition(() => router.refresh());
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur">
      <div className="py-2 text-center font-bold text-sm flex items-center justify-center">
        <span>My Blog!</span>
        <button
          onClick={handleDisableDraftMode}
          className="ml-4 px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
        >
          Disable Draft Mode
        </button>
      </div>
    </div>
  );
}

