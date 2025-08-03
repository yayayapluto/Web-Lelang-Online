import {type RouteConfig, index, layout, route} from "@react-router/dev/routes";

export default [
    layout("components/layouts/dashboardLayout.tsx", [
        index("routes/dashboard.tsx")
    ])
] satisfies RouteConfig;
