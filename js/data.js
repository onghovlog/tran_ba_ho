/**
 * TRAN BA HO - PERSONAL LANDING PAGE DATA SOURCE
 * Contains embedded initial state matching db.json for offline / file:// protocol compatibility,
 * and helper function to load fresh db.json when served via HTTP server.
 */

const APP_DATA = {
  "profile": {
    "name": "Trần Bá Hộ",
    "role": "Giảng viên Thiết kế Đồ họa & Công nghệ Thông tin tại Cao đẳng FPT Polytechnic",
    "tagline": "Thiết kế · Website · Công nghệ · Kinh doanh",
    "phone": "0908 123 456",
    "email": "tranbaho.fpt@gmail.com",
    "zalo": "https://zalo.me/0908123456",
    "messenger": "https://m.me/tranbaho",
    "location": "TP. Hồ Chí Minh, Việt Nam"
  },
  "designPortfolio": [
    {
      "id": 1,
      "title": "Nexus Coffee & Roastery",
      "category": "Logo",
      "image": "assets/images/design-01.svg",
      "description": "Hệ thống nhận diện thương hiệu và thiết kế logo tối giản cho chuỗi cà phê rang xay cao cấp.",
      "client": "Nexus Coffee Group",
      "year": "2026",
      "tags": ["Logo", "Typography", "Minimalist"]
    },
    {
      "id": 2,
      "title": "FPT TechFest 2026 Key Visual",
      "category": "Sự kiện",
      "image": "assets/images/design-02.svg",
      "description": "Bộ nhận diện sự kiện công nghệ & triển lãm đồ họa quy mô 2.000 sinh viên tại FPT Polytechnic.",
      "client": "FPT Polytechnic",
      "year": "2026",
      "tags": ["Key Visual", "Banner", "Standee", "Backdrop"]
    },
    {
      "id": 3,
      "title": "EcoGreen Organic Packaging",
      "category": "Branding",
      "image": "assets/images/design-03.svg",
      "description": "Quy chuẩn bao bì và bộ nhận diện thương hiệu sản phẩm nông sản hữu cơ xuất khẩu.",
      "client": "EcoGreen Farm",
      "year": "2025",
      "tags": ["Packaging", "Brand Identity", "Label Design"]
    },
    {
      "id": 4,
      "title": "Aura Cosmetics Social Kit",
      "category": "Social",
      "image": "assets/images/design-04.svg",
      "description": "Bộ ấn phẩm truyền thông đa kênh mạng xã hội chuẩn tỉ lệ cho Facebook, TikTok và Reels.",
      "client": "Aura Cosmetics",
      "year": "2026",
      "tags": ["Social Media", "Post Template", "Ad Creative"]
    },
    {
      "id": 5,
      "title": "FinTrack Logo & App Icon",
      "category": "Logo",
      "image": "assets/images/design-05.svg",
      "description": "Thiết kế biểu tượng nhận diện và icon ứng dụng quản lý chi tiêu cá nhân thông minh.",
      "client": "FinTrack Vietnam",
      "year": "2025",
      "tags": ["Logo", "App Icon", "Fintech"]
    },
    {
      "id": 6,
      "title": "Zenith Studio Guidelines",
      "category": "Branding",
      "image": "assets/images/design-06.svg",
      "description": "Cẩm nang quy chuẩn sử dụng logo, màu sắc, font chữ và phong cách hình ảnh toàn diện.",
      "client": "Zenith Creative",
      "year": "2025",
      "tags": ["Brandbook", "Guidelines", "Color System"]
    }
  ],
  "webProjects": [
    {
      "id": 1,
      "title": "Aura Boutique Online Store",
      "category": "Shop",
      "type": "E-Commerce",
      "tech": "HTML5 · CSS3 · JavaScript · WooCommerce",
      "image": "assets/images/web-01.svg",
      "description": "Website bán hàng thời trang cao cấp với giao diện thanh lịch, giỏ hàng 1 chạm và kết nối Zalo tự động.",
      "demoUrl": "https://auraboutique.vn",
      "highlights": ["Tải trang dưới 1.2s", "Tối ưu đặt hàng nhanh", "Đồng bộ đơn hàng"]
    },
    {
      "id": 2,
      "title": "Graphic Masterclass Landing Page",
      "category": "Landing Page",
      "type": "High-Converting Page",
      "tech": "HTML5 · Vanilla CSS · JavaScript thuần",
      "image": "assets/images/web-02.svg",
      "description": "Trang đích giới thiệu khoá học thiết kế đồ họa thực chiến, tối ưu tỉ lệ chuyển đổi lead đạt 14.8%.",
      "demoUrl": "https://masterclass.design.vn",
      "highlights": ["Form đăng ký thông minh", "Tương thích TikTok Browser", "Lighthouse 98/100"]
    },
    {
      "id": 3,
      "title": "Vinh Corp Construction Portal",
      "category": "Doanh nghiệp",
      "type": "Corporate Website",
      "tech": "WordPress · Custom Theme · PHP",
      "image": "assets/images/web-03.svg",
      "description": "Website giới thiệu năng lực tổng thầu xây dựng B2B với danh mục dự án tương tác mượt mà.",
      "demoUrl": "https://vinhgroup.com.vn",
      "highlights": ["Hồ sơ năng lực online", "Bộ lọc dự án nhanh", "Chuẩn SEO Google"]
    },
    {
      "id": 4,
      "title": "Alex Nguyen Creator Portfolio",
      "category": "Cá nhân",
      "type": "Personal Portfolio",
      "tech": "HTML5 · CSS Grid · Minimal JS",
      "image": "assets/images/web-04.svg",
      "description": "Website cá nhân dành cho nhiếp ảnh gia thương mại với gallery ảnh toàn màn hình và lightbox tinh tế.",
      "demoUrl": "https://alexphotography.me",
      "highlights": ["Gallery sắc nét", "Dark/Light tương phản", "Bố cục bất đối xứng"]
    },
    {
      "id": 5,
      "title": "POSOrder Cloud App Dashboard",
      "category": "Web App",
      "type": "SaaS Dashboard",
      "tech": "JavaScript ES6 · REST API · Chart.js",
      "image": "assets/images/web-05.svg",
      "description": "Ứng dụng web quản lý đơn hàng, doanh số và tồn kho trực quan dành cho người bán hàng đa kênh.",
      "demoUrl": "https://app.posorder.io",
      "highlights": ["Thống kê thời gian thực", "Giao diện tinh gọn", "Hỗ trợ di động"]
    },
    {
      "id": 6,
      "title": "Droppii Smart Supermarket Hub",
      "category": "Shop",
      "type": "Affiliate Store",
      "tech": "HTML5 · CSS3 · Droppii API Integration",
      "image": "assets/images/web-06.svg",
      "description": "Website siêu thị trực tuyến kết nối hệ sinh thái 3.000+ sản phẩm chính hãng không cần tồn kho.",
      "demoUrl": "https://sieuthidroppii.online",
      "highlights": ["Tự động cập nhật sản phẩm", "Đặt hàng chuyển thẳng", "Chuẩn di động"]
    }
  ],
  "services": [
    {
      "id": "design-logo",
      "number": "01",
      "title": "Thiết kế Logo",
      "summary": "Tạo dấu ấn nhận diện độc bản, tinh tế và dễ ghi nhớ cho cá nhân và thương hiệu.",
      "items": [
        "Logo cá nhân & Chuyên gia",
        "Logo doanh nghiệp & Startup",
        "Logo thương hiệu sản phẩm",
        "Bộ biểu tượng ứng dụng (App Icon)"
      ]
    },
    {
      "id": "design-event",
      "number": "02",
      "title": "Hình ảnh sự kiện & Social",
      "summary": "Bộ ấn phẩm truyền thông đồng bộ, thu hút ánh nhìn trên mạng xã hội và không gian sự kiện.",
      "items": [
        "Key Visual, Poster, Backdrop",
        "Banner quảng cáo đa kích thước",
        "Social Media Kit (Facebook / TikTok)",
        "Thumbnail video triệu view"
      ]
    },
    {
      "id": "design-brand",
      "number": "03",
      "title": "Bộ nhận diện thương hiệu",
      "summary": "Quy chuẩn hoá toàn bộ tài liệu và ấn phẩm tiếp thị giúp khẳng định uy tín lâu dài.",
      "items": [
        "Brand Identity & Brandbook",
        "Hệ thống màu sắc & Typography",
        "Ấn phẩm văn phòng & Danh thiếp",
        "Bao bì nhãn mác sản phẩm"
      ]
    },
    {
      "id": "web-uiux",
      "number": "04",
      "title": "Thiết kế UI/UX",
      "summary": "Nghiên cứu hành vi người dùng và tạo mẫu giao diện đẹp, trực quan, dễ thao tác trên mọi màn hình.",
      "items": [
        "Wireframe & Prototype tương tác",
        "Thiết kế UI Desktop & Mobile App",
        "Tối ưu luồng hành vi đặt hàng",
        "Design System tái sử dụng"
      ]
    },
    {
      "id": "web-landing",
      "number": "05",
      "title": "Landing Page chuyển đổi",
      "summary": "Trang đích tập trung cao độ vào hành động mua hàng hoặc để lại thông tin tư vấn.",
      "items": [
        "Landing page sản phẩm/dịch vụ",
        "Landing page cá nhân/khoá học",
        "Tích hợp form & Google Sheet/Zalo",
        "Tốc độ tải trang tức thì (< 1.5s)"
      ]
    },
    {
      "id": "web-business",
      "number": "06",
      "title": "Website kinh doanh trọn gói",
      "summary": "Giải pháp đưa cửa hàng lên Internet hoàn chỉnh, dễ quản trị và sẵn sàng kinh doanh.",
      "items": [
        "Website bán hàng Shop Có Web",
        "Website giới thiệu doanh nghiệp",
        "Website WordPress dễ chỉnh sửa",
        "Website lập trình riêng theo yêu cầu"
      ]
    }
  ],
  "droppii": {
    "title": "Sở hữu siêu thị online cùng Droppii",
    "subtitle": "Kinh doanh online tinh gọn – Hệ sinh thái sản phẩm chính hãng đa dạng",
    "description": "Mô hình kinh doanh Dropshipping hiện đại giúp bạn sở hữu ngay một siêu thị trực tuyến với hơn 3.000 sản phẩm chất lượng cao mà không cần ôm hàng, không lo đóng gói vận chuyển, được tôi đồng hành hướng dẫn 1-1 từ tư duy chọn sản phẩm đến cách xây dựng kênh bán hàng online hiệu quả.",
    "benefits": [
      "Không áp lực vốn nhập hàng – Không lo tồn kho",
      "Droppii đóng gói và giao hàng tận tay khách hàng",
      "Quản lý toàn bộ đơn hàng và thu nhập qua ứng dụng di động",
      "Được hỗ trợ xây dựng website bán hàng riêng biệt và tối ưu kênh cá nhân"
    ]
  },
  "articles": [
    {
      "id": 1,
      "title": "Tư duy thiết kế Logo không lỗi thời cho người mới bắt đầu",
      "category": "Thiết kế",
      "date": "28/02/2026",
      "image": "assets/images/article-01.svg",
      "description": "5 nguyên tắc cốt lõi giúp logo của bạn ghi nhớ ngay từ ánh nhìn đầu tiên và hoạt động sắc nét trên mọi chất liệu.",
      "content": "Một logo tốt không phải là logo chứa đựng quá nhiều hình vẽ phức tạp, mà là logo truyền tải đúng bản chất thương hiệu một cách giản dị nhất. Khi thiết kế, hãy luôn bắt đầu từ đen trắng (monochrome), đảm bảo logo vẫn rõ nét ở kích thước chỉ 16x16px trên thanh trình duyệt trước khi thêm màu sắc."
    },
    {
      "id": 2,
      "title": "Vì sao người bán hàng online năm 2026 nhất định cần có website riêng?",
      "category": "Website",
      "date": "24/02/2026",
      "image": "assets/images/article-02.svg",
      "description": "Phân tích rủi ro khi chỉ phụ thuộc vào mạng xã hội và cách một trang web tinh gọn giúp tăng uy tín bán hàng.",
      "content": "Mạng xã hội là nơi tuyệt vời để tiếp cận khách hàng mới, nhưng website mới là 'ngôi nhà' thực sự thuộc về bạn. Một website riêng giúp bạn không bị trôi bài, khách hàng dễ dàng tra cứu toàn bộ danh mục sản phẩm và bấm gọi hotline hoặc chat Zalo chỉ trong 1 giây."
    },
    {
      "id": 3,
      "title": "Ứng dụng AI để tăng tốc quy trình thiết kế và lập trình web",
      "category": "AI",
      "date": "18/02/2026",
      "image": "assets/images/article-03.svg",
      "description": "Cách tôi kết hợp các công cụ AI hiện đại để giảm 50% thời gian tạo mockup và viết mã nguồn chuẩn mực.",
      "content": "AI không thay thế người làm sáng tạo, nhưng người biết dùng AI sẽ làm việc nhanh gấp nhiều lần. Tôi ứng dụng AI để sinh ý tưởng cấu trúc layout, tự động hoá kiểm tra lỗi CSS/JS và tối ưu hóa từ khóa SEO cho từng trang web."
    },
    {
      "id": 4,
      "title": "Khởi động kinh doanh online tinh gọn cùng mô hình Droppii",
      "category": "Kinh doanh",
      "date": "12/02/2026",
      "image": "assets/images/article-04.svg",
      "description": "Chia sẻ kinh nghiệm thực tế về cách vận hành một cửa hàng trực tuyến với hơn 3.000 sản phẩm mà không cần kho bãi.",
      "content": "Đối với người bận rộn như giảng viên hoặc nhân viên văn phòng, mô hình Dropshipping của Droppii giải quyết triệt để bài toán vốn và vận hành. Bạn chỉ cần tập trung vào việc tư vấn và chăm sóc khách hàng bằng chính uy tín cá nhân của mình."
    },
    {
      "id": 5,
      "title": "Lời khuyên dành cho sinh viên Thiết kế & CNTT trước kỳ tốt nghiệp",
      "category": "Giảng dạy",
      "date": "05/02/2026",
      "image": "assets/images/article-05.svg",
      "description": "Những gì nhà tuyển dụng thực sự tìm kiếm ở một ứng viên trẻ và cách hoàn thiện đồ án thực chiến.",
      "content": "Nhà tuyển dụng không chỉ xem sản phẩm cuối cùng mà họ nhìn vào 'Process' (quy trình tư duy giải quyết vấn đề). Một portfolio gồm 3 dự án giải quyết vấn đề thực tế với case study rõ ràng luôn giá trị hơn 10 bài tập mô phỏng không có chiều sâu."
    },
    {
      "id": 6,
      "title": "Tối ưu tốc độ tải trang đạt 95+ điểm Google Lighthouse",
      "category": "Website",
      "date": "29/01/2026",
      "image": "assets/images/article-06.svg",
      "description": "Bí quyết tinh gọn JavaScript thuần, nén ảnh SVG/WebP và cấu trúc CSS chuẩn không cần thư viện cồng kềnh.",
      "content": "Tốc độ tải trang ảnh hưởng trực tiếp đến tỉ lệ chuyển đổi đơn hàng và thứ hạng Google. Bằng cách loại bỏ các framework thừa thãi, tải chậm YouTube iframe và tối ưu CSS Variables, website của bạn sẽ mở ra ngay lập tức trên cả kết nối 4G yếu."
    }
  ],
  "gallery": [
    {
      "id": 1,
      "title": "Giờ giảng dạy Thiết kế Đồ họa tại FPT Polytechnic",
      "category": "Giảng dạy",
      "image": "assets/images/gallery-01.svg",
      "caption": "Truyền cảm hứng và rèn luyện tư duy thị giác thực tế cho các bạn sinh viên."
    },
    {
      "id": 2,
      "title": "Workshop UI/UX Design & Frontend Essentials",
      "category": "Workshop",
      "image": "assets/images/gallery-02.svg",
      "caption": "Chia sẻ quy trình chuẩn từ bản vẽ thiết kế Figma sang giao diện web mượt mà."
    },
    {
      "id": 3,
      "title": "Hội đồng đánh giá Đồ án Tốt nghiệp CNTT & TKĐH",
      "category": "Sự kiện",
      "image": "assets/images/gallery-03.svg",
      "caption": "Đồng hành và phản biện giúp sinh viên hoàn thiện sản phẩm đầu ra chất lượng cao."
    },
    {
      "id": 4,
      "title": "Ban giám khảo Cuộc thi Sáng tạo Thiết kế Trẻ",
      "category": "Sự kiện",
      "image": "assets/images/gallery-04.svg",
      "caption": "Khích lệ các ý tưởng đột phá và tính ứng dụng của thế hệ sáng tạo mới."
    },
    {
      "id": 5,
      "title": "Tư vấn kiến trúc dự án Shop Có Web cho chủ cửa hàng",
      "category": "Dự án",
      "image": "assets/images/gallery-05.svg",
      "caption": "Lên lộ trình đưa sản phẩm lên website giúp tinh gọn quy trình bán hàng online."
    },
    {
      "id": 6,
      "title": "Buổi chia sẻ kinh nghiệm kinh doanh online Droppii",
      "category": "Kinh doanh",
      "image": "assets/images/gallery-06.svg",
      "caption": "Gặp gỡ, hướng dẫn và kết nối cùng các đối tác khởi nghiệp tinh gọn."
    },
    {
      "id": 7,
      "title": "Không gian làm việc & Studio nghiên cứu giải pháp số",
      "category": "Cá nhân",
      "image": "assets/images/gallery-07.svg",
      "caption": "Nơi những ý tưởng về thiết kế, mã nguồn và kinh doanh được thử nghiệm liên tục."
    },
    {
      "id": 8,
      "title": "Hội thảo Ứng dụng AI trong Sáng tạo & Lập trình",
      "category": "Workshop",
      "image": "assets/images/gallery-08.svg",
      "caption": "Cập nhật các công nghệ tiên phong để nâng cao hiệu suất làm việc."
    }
  ],
  "youtubeVideos": [
    {
      "id": 1,
      "title": "Hướng Dẫn Thiết Kế Giao Diện UI/UX Bằng Figma Cơ Bản Đến Nâng Cao",
      "videoId": "dQw4w9WgXcQ",
      "duration": "24:15",
      "thumbnail": "assets/images/video-01.svg",
      "category": "UI/UX Design",
      "description": "Video hướng dẫn từng bước tạo wireframe, thiết kế component và prototype tương tác mượt mà trong Figma."
    },
    {
      "id": 2,
      "title": "Xây Dựng Website Kinh Doanh Chuẩn SEO & Mobile Bằng HTML/CSS/JS",
      "videoId": "dQw4w9WgXcQ",
      "duration": "38:40",
      "thumbnail": "assets/images/video-02.svg",
      "category": "Web Development",
      "description": "Tự tay code một landing page bán hàng chuyên nghiệp từ con số 0 với tốc độ tải trang cực nhanh."
    },
    {
      "id": 3,
      "title": "Mô Hình Droppii Là Gì? Bí Quyết Bán Hàng Online Tinh Gọn Không Cần Vốn",
      "videoId": "dQw4w9WgXcQ",
      "duration": "19:20",
      "thumbnail": "assets/images/video-03.svg",
      "category": "Online Business",
      "description": "Giải thích chi tiết quy trình vận hành Dropshipping và kinh nghiệm thực chiến tạo nguồn thu nhập thứ 2."
    },
    {
      "id": 4,
      "title": "Quy Trình Triển Khai Website 'Shop Có Web' Từ A Đến Z Trong 48 Giờ",
      "videoId": "dQw4w9WgXcQ",
      "duration": "31:10",
      "thumbnail": "assets/images/video-04.svg",
      "category": "Shop Có Web",
      "description": "Case study thực tế giúp một shop thời trang nhỏ xây dựng kênh bán hàng trực tuyến và tăng gấp đôi lượng đơn."
    }
  ]
};

async function loadAppData() {
  try {
    const response = await fetch('db.json');
    if (response.ok) {
      const data = await response.json();
      return Object.assign({}, APP_DATA, data);
    }
  } catch (err) {
    console.info('Loaded static APP_DATA bundle fallback.');
  }
  return APP_DATA;
}

if (typeof window !== 'undefined') {
  window.APP_DATA = APP_DATA;
  window.loadAppData = loadAppData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { APP_DATA, loadAppData };
}
