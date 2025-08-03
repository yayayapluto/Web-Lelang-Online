import {type RouteConfig, index, layout, route, prefix} from "@react-router/dev/routes";

export default [
    layout("components/layouts/dashboardLayout.tsx", [
        index("routes/dashboard.tsx"),
        ...prefix("modul-negara", [
            index("components/pages/countries/index.tsx"),
            // route("/add", "components/pages/countries/create-form.tsx"),
            // route("/:id", "components/pages/countries/detail.tsx"),
            // route("/:id/edit", "components/pages/countries/update-form.tsx"),
        ])
    ])
] satisfies RouteConfig;
