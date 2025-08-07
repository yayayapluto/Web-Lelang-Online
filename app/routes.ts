import {type RouteConfig, index, layout, route, prefix} from "@react-router/dev/routes";

export default [
    layout("components/layouts/dashboardLayout.tsx", [
        index("routes/dashboard.tsx"),
        ...prefix("modul-negara", [
            index("components/pages/countries/index.tsx"),
            // route("/add", "components/pages/countries/create-form.tsx"),
            route("/:id", "components/pages/countries/detail.tsx"),
            // route("/:id/edit", "components/pages/countries/update-form.tsx"),
        ]),
        ...prefix("modul-provinsi", [
            index("components/pages/provinces/index.tsx"),
            // route("/add", "components/pages/provinces/create-form.tsx"),
            route("/:id", "components/pages/provinces/detail.tsx"),
            // route("/:id/edit", "components/pages/provinces/update-form.tsx"),
        ]),
        ...prefix("modul-kota", [
            index("components/pages/cities/index.tsx"),
            // route("/add", "components/pages/cities/create-form.tsx"),
            route("/:id", "components/pages/cities/detail.tsx"),
            // route("/:id/edit", "components/pages/cities/update-form.tsx"),
        ]),
        ...prefix("modul-kecamatan", [
            index("components/pages/subdistricts/index.tsx"),
            // route("/add", "components/pages/subdistricts/create-form.tsx"),
            route("/:id", "components/pages/subdistricts/detail.tsx"),
            // route("/:id/edit", "components/pages/subdistricts/update-form.tsx"),
        ]),
        ...prefix("modul-kelurahan", [
            index("components/pages/villages/index.tsx"),
            // route("/add", "components/pages/villages/create-form.tsx"),
            route("/:id", "components/pages/villages/detail.tsx"),
            // route("/:id/edit", "components/pages/villages/update-form.tsx"),
        ]),
        ...prefix("modul-jenis-pekerjaan", [
            index("components/pages/jobTypes/index.tsx"),
            // route("/add", "components/pages/jobTypes/create-form.tsx"),
            route("/:id", "components/pages/jobTypes/detail.tsx"),
            // route("/:id/edit", "components/pages/jobTypes/update-form.tsx"),
        ]),
        ...prefix("modul-kategori-barang", [
            index("components/pages/categories/index.tsx"),
            // route("/add", "components/pages/categories/create-form.tsx"),
            route("/:id", "components/pages/categories/detail.tsx"),
            // route("/:id/edit", "components/pages/categories/update-form.tsx"),
        ]),
        ...prefix("modul-jenis-barang", [
            index("components/pages/itemTypes/index.tsx"),
            // route("/add", "components/pages/itemTypes/create-form.tsx"),
            route("/:id", "components/pages/itemTypes/detail.tsx"),
            // route("/:id/edit", "components/pages/itemTypes/update-form.tsx"),
        ]),
        ...prefix("modul-jenis-objek", [
            index("components/pages/objectTypes/index.tsx"),
            // route("/add", "components/pages/objectTypes/create-form.tsx"),
            route("/:id", "components/pages/objectTypes/detail.tsx"),
            // route("/:id/edit", "components/pages/objectTypes/update-form.tsx"),
        ]),
        ...prefix("modul-file", [
            index("components/pages/files/index.tsx"),
            // route("/add", "components/pages/files/create-form.tsx"),
            route("/:id", "components/pages/files/detail.tsx"),
            // route("/:id/edit", "components/pages/files/update-form.tsx"),
        ]),
        ...prefix("modul-kpknl", [
            index("components/pages/kpknls/index.tsx"),
            // route("/add", "components/pages/kpknls/create-form.tsx"),
            route("/:id", "components/pages/kpknls/detail.tsx"),
            // route("/:id/edit", "components/pages/kpknls/update-form.tsx"),
        ]),
        ...prefix("modul-penyelenggara", [
            index("components/pages/organizers/index.tsx"),
            // route("/add", "components/pages/organizers/create-form.tsx"),
            route("/:id", "components/pages/organizers/detail.tsx"),
            // route("/:id/edit", "components/pages/organizers/update-form.tsx"),
        ]),
        ...prefix("modul-pengguna", [
            index("components/pages/users/index.tsx"),
            // route("/add", "components/pages/users/create-form.tsx"),
            route("/:id", "components/pages/users/detail.tsx"),
            // route("/:id/edit", "components/pages/users/update-form.tsx"),
        ]),
        ...prefix("modul-penjual", [
            index("components/pages/sellers/index.tsx"),
            // route("/add", "components/pages/sellers/create-form.tsx"),
            route("/:id", "components/pages/sellers/detail.tsx"),
            // route("/:id/edit", "components/pages/sellers/update-form.tsx"),
        ]),
        ...prefix("modul-barang", [
            index("components/pages/items/index.tsx"),
            // route("/add", "components/pages/items/create-form.tsx"),
            route("/:id", "components/pages/items/detail.tsx"),
            // route("/:id/edit", "components/pages/items/update-form.tsx"),
        ]),
        ...prefix("modul-foto-barang", [
            index("components/pages/itemPhotos/index.tsx"),
            // route("/add", "components/pages/countries/create-form.tsx"),
            // route("/:id", "components/pages/countries/detail.tsx"),
            // route("/:id/edit", "components/pages/countries/update-form.tsx"),
        ]),
        ...prefix("modul-lelang", [
            index("components/pages/auctions/index.tsx"),
            // route("/add", "components/pages/countries/create-form.tsx"),
            // route("/:id", "components/pages/countries/detail.tsx"),
            // route("/:id/edit", "components/pages/countries/update-form.tsx"),
        ]),
        ...prefix("modul-konten-lelang", [
            index("components/pages/auctionContents/index.tsx"),
            // route("/add", "components/pages/countries/create-form.tsx"),
            // route("/:id", "components/pages/countries/detail.tsx"),
            // route("/:id/edit", "components/pages/countries/update-form.tsx"),
        ])
    ])
] satisfies RouteConfig;
