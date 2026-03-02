const data = [
    {
        department: "Dữ liệu chung",
        icon: "bx-data",
        items: [
            { name: "Biểu mẫu hay dùng", link: "https://docs.google.com/document/d/1lAi4ucVapj2RAq7XNv5ZVQ0UDNO3uEplM-63O_Za7lU/edit?usp=sharing", type: "document" },
            { name: "Giấy ủy quyền", link: "https://drive.google.com/drive/folders/1rqoS654_WqlpPtuSb81HiOp6vwK0aPkL", type: "folder" },
            { name: "Hồ sơ năng lực Cty", link: "https://drive.google.com/drive/folders/1uZTzaqbxHBv_qIQ3ll8V79w9NxpsmnwM", type: "folder" },
            { name: "Văn bản 2026", link: "https://drive.google.com/drive/folders/1BOPI64C1uLBC32EMpjyygdcZSIy8hUYn?usp=drive_link", type: "finance" },
            { name: "Hệ số và lương hỗ trợ 2026", link: "", type: "finance" },
            { name: "Cổng thông tin năm 2025", link: "https://docs.google.com/document/d/18ai12BuNupyI9cRyb7DLU_2EKezdlq0yd1u0vGorpnk/edit?usp=sharing", type: "document" },
            { name: "Phần mềm hay dùng", link: "", type: "software" },
        ]
    },
    {
        department: "Nghiệp vụ 1",
        icon: "bx-briefcase",
        items: [
            { name: "Lương khoán", link: "https://docs.google.com/spreadsheets/d/1G7Une4nE6904BcnfECfkPlHx-D-FQt4iRQT0MKQMHzk/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Bảng tổng lương", link: "https://docs.google.com/spreadsheets/d/1XIfxnz2n14GQraXFFs528m31SdazMHAA4YYTZPLDSBg/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Chấm công", link: "https://docs.google.com/spreadsheets/d/1gQ4UMgUKZ715qx4ViYIzgj7ZJwMga398oc6kzRxEx98/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Doanh thu", link: "", type: "finance" },
            { name: "Thuế TNCN (tạm tính)", link: "", type: "finance" },
        ]
    },
    {
        department: "Nghiệp vụ 2",
        icon: "bx-briefcase-alt",
        items: [
            { name: "Lương khoán", link: "https://docs.google.com/spreadsheets/d/117m8mxGstIo70gNpirqsmy1pnwJBZbLXJmBzyfRQ7D4/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Bảng tổng lương", link: "https://docs.google.com/spreadsheets/d/13xE2sClDXGNzdvIVFLBqlCxhZdJ2fs11ibJxTZcoHfM/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Chấm công", link: "https://docs.google.com/spreadsheets/d/1Z0oH2xXa_7FZ7_k7ZSTJ7sVpVD0s7JqrlU18VJH33ZQ/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Doanh thu", link: "", type: "finance" },
            { name: "Thuế TNCN (tạm tính)", link: "", type: "finance" },
        ]
    },
    {
        department: "Nghiệp vụ 3",
        icon: "bx-briefcase-alt-2",
        items: [
            { name: "Lương khoán", link: "https://docs.google.com/spreadsheets/d/1-tumIf_giATAUYmRFlyZncaGuUKCcKi-y0u66lU9nyo/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Bảng tổng lương", link: "https://docs.google.com/spreadsheets/d/1qJLgnlP7bv2TOHy-1tmzNOf5QZO3N_32GneB89wC2UQ/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Chấm công", link: "https://docs.google.com/spreadsheets/d/1547feRjePZ2kLgFsNs8hgr6K0KTJBaUrDfoiT-sp8jA/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Doanh thu", link: "", type: "finance" },
            { name: "Thuế TNCN (tạm tính)", link: "", type: "finance" },
        ]
    },
    {
        department: "Nghiệp vụ 5",
        icon: "bx-diamond",
        items: [
            { name: "Lương khoán", link: "https://docs.google.com/spreadsheets/d/1Csy0antFtrQ_1xsrw7DVGDtb43MMoFp91kT88jJ_3hk/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Bảng tổng lương", link: "https://docs.google.com/spreadsheets/d/1PiZTeHxDF6w6yVlVgnj8EncxdFjYmRQV8BGWyfarLq0/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Chấm công", link: "https://docs.google.com/spreadsheets/d/1ah8WeZiA0HrwNecVVqoMvCUVaayqAMVLdI3E5QU8j0U/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Doanh thu", link: "", type: "finance" },
            { name: "Thuế TNCN (tạm tính)", link: "", type: "finance" },
        ]
    },
    {
        department: "Kinh doanh 1",
        icon: "bx-line-chart",
        items: [
            { name: "Lương khoán", link: "https://docs.google.com/spreadsheets/d/1Wdta6dxAJ46wRF5cmfqY4iOAdYclvnGIMNQqJN8XMfk/edit?usp=sharing", type: "spreadsheet" },
            { name: "Bảng tổng lương", link: "https://docs.google.com/spreadsheets/d/1E-sSPht5qgqgCJZCNBMIaaB8eiTPsu6Vr-jSYbTw890/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Chấm công", link: "https://docs.google.com/spreadsheets/d/16U7y-F9BQh9c9qQK2JrYGI8S5P9K4BWqrn-XmRUAn2E/edit?usp=sharing", type: "spreadsheet" },
            { name: "Doanh thu", link: "", type: "finance" },
            { name: "Thuế TNCN (tạm tính)", link: "", type: "finance" },
        ]
    },
    {
        department: "Kinh doanh 2",
        icon: "bx-trending-up",
        items: [
            { name: "Lương khoán", link: "https://docs.google.com/spreadsheets/d/1A989-dsu76_XNEYEzc9j1ERUHvq9l9mFyAcBwzsfhKU/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Bảng tổng lương", link: "https://docs.google.com/spreadsheets/d/1pfb82MsXLcez07-CHcQkzbYx1tPeRz4rte1S4LxK3zM/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Chấm công", link: "https://docs.google.com/spreadsheets/d/1ocAqBgU1EJQDf3a08mJt6QyGuH7kh_dhekg03hsrfCs/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Doanh thu", link: "", type: "finance" },
            { name: "Thuế TNCN (tạm tính)", link: "", type: "finance" },
        ]
    },
    {
        department: "Kinh doanh 3",
        icon: "bx-stats",
        items: [
            { name: "Lương khoán", link: "https://docs.google.com/spreadsheets/d/1-ZcURl0plVP7m9xMfl0oWLEvWXbSVP1mAE3_M8MEwGg/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Bảng tổng lương", link: "https://docs.google.com/spreadsheets/d/1TTkykzrjuG9S4VCdtp_eTmDrk9_uQowzQTKrVxal2Rw/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Chấm công", link: "https://docs.google.com/spreadsheets/d/1jhUiU9mfBIS3fFv1Pt-Tw5Vbz0KOeBbCJc12NzAnqoA/edit?usp=sharing", type: "spreadsheet" },
            { name: "Doanh thu", link: "", type: "finance" },
            { name: "Thuế TNCN (tạm tính)", link: "", type: "finance" },
        ]
    },
    {
        department: "Kế toán Tổng hợp",
        icon: "bx-calculator",
        items: [
            { name: "Lương khoán", link: "https://docs.google.com/spreadsheets/d/1QuUU6GfFlWP01X4Bw5uCiiQgpND0apz8Q0jeu3xAZZM/edit?usp=sharing", type: "spreadsheet" },
            { name: "Bảng tổng lương", link: "https://docs.google.com/spreadsheets/d/18T0zBSCwH7WPSqh3PqnBk73kSX4OR68eOuet7r25lvc/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Chấm công", link: "https://docs.google.com/spreadsheets/d/1xcXrwXTyahDK-wHxTzy1qm2FvDYGmq8jY_PwEQhZ1x0/edit?usp=sharing", type: "spreadsheet" },
            { name: "Doanh thu", link: "", type: "finance" },
            { name: "Thuế TNCN (tạm tính)", link: "", type: "finance" },
            { name: "TH lương khoán", link: "https://docs.google.com/spreadsheets/d/1aVmV2WBXzECQtFhHXp3o-2yWG3nF4i9naJvwtTVGRCo/edit?usp=sharing", type: "spreadsheet" },
            { name: "TH bảng lương", link: "https://docs.google.com/spreadsheets/d/1_sRNQksIyHxcF0vO48Kbrr697E1Z4cCDnTUiwaew_TY/edit?usp=drive_link", type: "spreadsheet" },
            { name: "Bảo hiểm XH", link: "https://docs.google.com/spreadsheets/d/1buk922JQ9_ijiUbFTN7bFa0VM8TIGWaRaH0fXawAmEM/edit?usp=sharing", type: "spreadsheet" },
            { name: "Mẫu hay dùng", link: "https://docs.google.com/document/d/1sGZCsui2S-hv4DQT43vo5Q_SI72ZNfT8ro8nBWM_avw/edit?usp=sharing", type: "document" },
        ]
    },
    {
        department: "Ban Giám đốc",
        icon: "bx-user-tie",
        items: [
            { name: "Bảng tổng lương", link: "https://docs.google.com/spreadsheets/d/1sfDtIBkZc_hezcj4RVl_hAcxauEyIlALaRSnnccvs9U/edit?usp=drive_link", type: "spreadsheet" },
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav-menu');
    const dataLinksContainer = document.getElementById('data-links-container');
    const currentDeptTitle = document.getElementById('current-dept-title');

    // Update Time and Greeting
    const updateTimeAndGreeting = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');

        const timeStr = `${hours}:${minutes}`;
        const timeElement = document.getElementById('current-time');
        if (timeElement) timeElement.textContent = timeStr;

        let greeting = 'Xin chào';
        let icon = 'bx-sun';

        if (hours >= 5 && hours < 12) {
            greeting = 'Chào buổi sáng';
            icon = 'bx-sun';
        } else if (hours >= 12 && hours < 18) {
            greeting = 'Chào buổi chiều';
            icon = 'bx-sun';
        } else {
            greeting = 'Chào buổi tối';
            icon = 'bx-moon';
        }

        const greetingText = document.getElementById('greeting-text');
        const greetingIcon = document.getElementById('greeting-icon');
        if (greetingText) greetingText.textContent = greeting;
        if (greetingIcon) greetingIcon.className = `bx ${icon}`;
    };

    updateTimeAndGreeting();
    setInterval(updateTimeAndGreeting, 60000);

    // Hàm lấy icon tương ứng với loại tài liệu
    const getTypeIcon = (type) => {
        switch (type) {
            case 'document': return 'bx-file';
            case 'folder': return 'bx-folder';
            case 'finance': return 'bx-money';
            case 'spreadsheet': return 'bx-table';
            case 'software': return 'bx-laptop';
            default: return 'bx-file-blank';
        }
    };

    // Render Navigation (Danh sách phòng ban)
    data.forEach((dept, index) => {
        const navItem = document.createElement('div');
        navItem.className = `nav-item ${index === 0 ? 'active' : ''}`;
        navItem.innerHTML = `<i class='bx ${dept.icon}'></i> <span>${dept.department}</span>`;

        navItem.addEventListener('click', () => {
            // Remove active class from all
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            // Add to clicked
            navItem.classList.add('active');
            // Render the specific department cards
            renderCards(dept);
        });

        navMenu.appendChild(navItem);
    });

    // Render Cards (Các mục dữ liệu)
    const renderCards = (dept) => {
        currentDeptTitle.textContent = dept.department;

        // Reset animation
        currentDeptTitle.style.animation = 'none';
        currentDeptTitle.offsetHeight; /* trigger reflow */
        currentDeptTitle.style.animation = 'fadeIn 0.5s ease';

        dataLinksContainer.innerHTML = '';

        dept.items.forEach((item, index) => {
            const delay = index * 0.05;
            const card = document.createElement('div');
            card.className = 'data-card';
            card.style.animation = `slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s both`;

            const hasLink = item.link && item.link.trim() !== '';

            card.innerHTML = `
                <div class="card-icon type-${item.type}">
                    <i class='bx ${getTypeIcon(item.type)}'></i>
                </div>
                <h3 class="card-title">${item.name}</h3>
                <div class="card-link">
                    ${hasLink
                    ? `<a href="${item.link}" target="_blank" class="btn btn-primary"><i class='bx bx-link-external'></i> Truy cập ngay</a>`
                    : `<span class="btn btn-disabled"><i class='bx bx-lock-alt'></i> Đang cập nhật</span>`
                }
                </div>
            `;
            dataLinksContainer.appendChild(card);
        });
    };

    // Hiển thị mặc định phòng ban đầu tiên
    renderCards(data[0]);
});
