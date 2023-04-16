export async function GET(request: Request) {
    return new Response(JSON.stringify({
        data: [
            {
                _id: "1",
                name: "Chip",
                details: "Intel i3 12100",
                guarantee: "36 tháng",
                quantity: 1,
                price: 3400000,
                total: 3400000,
                purchase_price: 3150000
            },
            {
                _id: "2",
                name: "Main",
                details: "Main MSI H610",
                guarantee: "36 tháng",
                quantity: 1,
                price: 2250000,
                total: 2250000,
                purchase_price: 2000000
            },
            {
                _id: "3",
                name: "Ram",
                details: "Ram 8G DDR4 buss 2666",
                guarantee: "36 tháng",
                quantity: 1,
                price: 700000,
                total: 700000,
                purchase_price: 700000
            },
            {
                _id: "4",
                name: "Ổ Cứng",
                details: "Lexar M.2 2280 NVME 500GB",
                guarantee: "36 tháng",
                quantity: 1,
                price: 1250000,
                total: 1250000,
                purchase_price: 990000
            },
            {
                _id: "5",
                name: "Nguồn",
                details: "Nguồn 450W",
                guarantee: "36 tháng",
                quantity: 1,
                price: 550000,
                total: 550000,
                purchase_price: 460000
            },
            {
                _id: "6",
                name: "Màn Hình",
                details: "Dell Monitor S2421H Có Loa",
                guarantee: "36 tháng",
                quantity: 1,
                price: 4700000,
                total: 4700000,
                purchase_price: 4550000
            },
            {
                _id: "7",
                name: "Case",
                details: "2 Mặt Gương 212 + 2 Fan RBG",
                guarantee: "",
                quantity: 1,
                price: 600000,
                total: 600000,
                purchase_price: 420000
            },
            {
                _id: "8",
                name: "Web Cam",
                details: "Digital High 1080 Full HD",
                guarantee: "6 tháng",
                quantity: 1,
                price: 250000,
                total: 250000,
                purchase_price: 150000
            },
            {
                _id: "9",
                name: "Phím",
                details: "Phím văn phòng",
                guarantee: "Tặng Kèm",
                quantity: 1,
                price: 0,
                total: 0,
                purchase_price: 85000
            },
            {
                _id: "10",
                name: "Chuột",
                details: "Chuột văn phòng",
                guarantee: "Tặng Kèm",
                quantity: 1,
                price: 0,
                total: 0,
                purchase_price: 40000
            },
            {
                _id: "11",
                name: "Tấm Lót",
                details: "Lót chuột",
                guarantee: "Tặng Kèm",
                quantity: 1,
                price: 0,
                total: 0,
                purchase_price: 20000
            }
        ]
    }))
  }
  