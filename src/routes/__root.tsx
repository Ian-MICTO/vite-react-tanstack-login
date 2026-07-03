import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Tooltip, TooltipProvider } from "../components/ui/tooltip"
import type { QueryClient } from "@tanstack/react-query";

interface RouterContext {
    queryClient: QueryClient;
}

//change into:
export const Route = createRootRouteWithContext<RouterContext>()({
    component: () => (
        <div>
            <TooltipProvider>
                <Tooltip>
                    <Outlet />
                </Tooltip>
                <TanStackRouterDevtools />
            </TooltipProvider>
        </div>
    )
})