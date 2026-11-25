export const projects = [
  {
    id: 'sports-saas',
    title: 'Sports Facility & POS Management',
    category: 'Business SaaS',
    featured: true,
    description: 'A SaaS application for facility reservations, point-of-sale transactions, stock management, and customer check-in.',
    tech: ['ASP.NET MVC', 'React', 'SQL Server', 'Entity Framework', 'SignalR', 'JWT'],
    modules: ['Facility booking', 'Point of sale', 'Inventory', 'QR check-in'],
    problem: 'Sports facilities need to handle reservations, counter sales, inventory, and arrivals as part of their daily operations.',
    contribution: 'I developed modules for facility booking, POS transactions, inventory, product management, and QR-based customer check-in.',
    implementation: 'I implemented JWT authentication, role-based authorization, and SignalR updates. I used DTOs and the Repository Pattern when refactoring application logic.',
  },
  {
    id: 'wifi-portal',
    title: 'WiFi Portal CMS',
    category: 'Backend integration',
    description: 'Configurable portal pages and question flows backed by an existing ASP.NET system.',
    tech: ['ASP.NET Web API', 'SQL Server', 'Flutter'],
    problem: 'The WiFi portal needed configurable landing pages and question flows alongside login-code validation.',
    contribution: 'I extended the existing backend by integrating Web APIs for template, landing-page configuration, dynamic question flows, and validation.',
    implementation: 'The new APIs were integrated with existing backend services.',
  },
  {
    id: 'warehouse',
    title: 'Warehouse Management System',
    category: 'Personal project',
    description: 'Inventory management APIs with business logic separated from persistence.',
    tech: ['ASP.NET Core Web API', 'SQL Server', 'Clean Architecture'],
    problem: 'Inventory use cases and database schema changes needed a clear home in the codebase.',
    contribution: 'I developed inventory management APIs across API, Application, Domain, and Infrastructure layers.',
    implementation: 'The Application project depends on Domain, while Infrastructure depends on Application. I used Code First migrations to manage SQL Server schema changes.',
    dependencies: [
      ['API', 'Application'],
      ['API', 'Infrastructure'],
      ['Application', 'Domain'],
      ['Infrastructure', 'Application'],
    ],
  },
]

export const vietnameseProjects = {
  'sports-saas': {
    title: 'Quản lý sân thể thao và bán hàng tại quầy',
    category: 'SaaS cho doanh nghiệp',
    description: 'Ứng dụng SaaS hỗ trợ đặt sân, bán hàng tại quầy, quản lý tồn kho và ghi nhận khách đến.',
    modules: ['Đặt sân', 'Bán hàng tại quầy', 'Quản lý tồn kho', 'Check-in bằng mã QR'],
    problem: 'Các cơ sở thể thao cần xử lý việc đặt sân, bán hàng tại quầy, quản lý tồn kho và đón khách trong hoạt động hằng ngày.',
    contribution: 'Tôi phát triển các phân hệ đặt sân, giao dịch tại quầy, quản lý tồn kho, quản lý sản phẩm và check-in bằng mã QR.',
    implementation: 'Tôi triển khai xác thực bằng JWT, phân quyền theo vai trò và cập nhật dữ liệu qua SignalR. Khi tái cấu trúc logic ứng dụng, tôi sử dụng DTO và Repository Pattern.',
  },
  'wifi-portal': {
    title: 'Hệ quản trị nội dung cổng Wi-Fi',
    category: 'Tích hợp backend',
    description: 'Cho phép cấu hình trang cổng Wi-Fi và luồng câu hỏi trên hệ thống ASP.NET hiện có.',
    problem: 'Cổng Wi-Fi cần cho phép cấu hình trang đích và luồng câu hỏi, đồng thời kiểm tra mã đăng nhập.',
    contribution: 'Tôi mở rộng backend hiện có bằng cách tích hợp Web API cho mẫu giao diện, cấu hình trang đích, luồng câu hỏi động và kiểm tra tính hợp lệ.',
    implementation: 'Tôi tích hợp các API mới vào các dịch vụ backend hiện có.',
  },
  warehouse: {
    title: 'Hệ thống quản lý kho',
    category: 'Dự án cá nhân',
    description: 'Các API quản lý tồn kho với logic nghiệp vụ được tách khỏi phần lưu trữ dữ liệu.',
    problem: 'Mã nguồn cần có vị trí rõ ràng cho các nghiệp vụ quản lý tồn kho và các thay đổi cấu trúc cơ sở dữ liệu.',
    contribution: 'Tôi phát triển các API quản lý tồn kho qua các tầng API, Application, Domain và Infrastructure.',
    implementation: 'Tầng Application phụ thuộc vào Domain, còn Infrastructure phụ thuộc vào Application. Tôi dùng migration theo Code First để quản lý thay đổi cấu trúc cơ sở dữ liệu SQL Server.',
  },
}

