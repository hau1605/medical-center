import React, { useEffect, useState } from "react";
import { 
    Card, 
    Button, 
    Container, 
    Col, 
    Row,
} from "react-bootstrap";
import Banner from '../../components/Banner/Banner'
import "./HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { Link } from 'react-router-dom';
import "swiper/css/scrollbar";
const listExam = [
    {
        image:  'https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_1.jpg?1677379206119',
        title: 'Tầm soát ung thư',
        content: '<p style="margin:4px 0">' + 
            'Mỗi năm Việt Nam có hơn 126.000 ca mắc mới mắc bệnh ung thư, trong số đó khoảng ' +
            '94.000 người tử vong vì phát hiện quá muộn. Việt Nam cũng là một trong những quốc ' +
            'gia có tỷ lệ người dân đi tầm soát ung thư thấp nhất. Nếu được tầm soát và phát hiện ' +
            'sớm, những căn bệnh ung thư sau có thể chữa khỏi hoàn toàn:</p>' +
            '<p style="margin:4px 0">&#10004;Ung thư phổi</p>' +
            '<p style="margin:4px 0">&#10004;Ung thư gan</p>' +
            '<p style="margin:4px 0">&#10004;Ung thư dạ dày</p>' +
            '<p style="margin:4px 0">&#10004;Ung thư vú</p>' +
            '<p style="margin:4px 0">&#10004;Ung thư cổ tử cung</p>' +
            '<p>Tầm soát ung thư là phương thức chẩn đoán nhằm phát hiện ra mầm mống ung thư hoặc khi khối u c...</p>'
    },
    {
        image:  'https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_2.jpg?1677379206119',
        title: 'Mô học',
        content: '<p style="margin:4px 0">' + 
            'Xét nghiệm chẩn đoán mô bệnh học là xét nghiệm thực hiện trên mẫu mô sau sinh thiết nội soi, sinh thiết kim hoặc ' +
            'trong bệnh phẩm phẫu thuật. Bệnh phẩm được bảo quản trong môi trường formol pha theo tỷ lệ quy định rồi được chuyển ' +
            'về phòng xét nghiệm giải phẫu bệnh.</p>' +
            '<p>Tại đây, mẫu bệnh phẩm được xử lí theo đúng quy trình xét nghiệm để đưa ra kết quả chính xác nhất. Kết quả xét nghiệm ' +
            'này là tiêu chuẩn vàng trong chẩn đoán bệnh lí ác tính. </p>' +
            '<p>Xét nghiệm chẩn đoán hóa mô miễn dịch nhằm giúp xác định chính xác nguồn gốc của các khối u ' +
            'kém biệt hóa. Xét nghiệm này thường đ...</p>'
    },
    {
        image:  'https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_3.jpg?1677379206119',
        title: 'Khám tổng quát',
        content: '<p style="margin:4px 0">&#10004;Xét nghiệm chỉ số máu (nhằm phát hiện tình trạng thiếu máu và ' + 
            'một số bệnh lý về máu, chẩn đoán tiểu đường và dung nạp Glucose, đánh giá chức năng thận, chức năng ' +
            'gan, tầm soát virus viêm gan B…)i</p>' +
            '<p style="margin:4px 0">&#10004;Xét nghiệm nước tiểu, nhằm phát hiện một số bệnh lý về thận, tiết niệu…</p>' +
            '<p style="margin:4px 0">&#10004;Chẩn đoán hình ảnh, thăm dò chức năng (gồm: Chụp X Quang ngực thẳng, ' +
            'điện tim đồ, siêu âm ổ bụng tổng quát thường, chụp CT…).</p>' +
            '<p>Tự hào là bệnh viện lớn, được xây dựng theo tiêu chuẩn “Bệnh viện – Khách sạn và lọt Top 3 bệnh viện ' +
            'có điểm chất lượng cao nhất – Bệnh viện ĐKQT Ego Medical là địa chỉ uy tín được nhiều doanh nghiệp đăng...</p>'
    },
    {
        image:  'https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_4.jpg?1677379206119',
        title: 'Xét nghiệm máu',
        content: '<p style="margin:4px 0">' + 
            'Có rất nhiểu bệnh có thể phát hiện được qua xét nghiệm máu. Thông thường khi khám sức khỏe bác sĩ sẽ ' +
            'chỉ định thực hiện những xét nghiệm máu sau:</p>' +
            '<p style="margin:4px 0">&#10004;Xét nghiệm công thức máu</p>' +
            '<p style="margin:4px 0">&#10004;Xét nghiệm đường máu</p>' +
            '<p style="margin:4px 0">&#10004;Xét nghiệm mỡ máu</p>' +
            '<p style="margin:4px 0">&#10004;Xét nghiệm viêm gan B</p>' +
            '<p style="margin:4px 0">&#10004;Xét nghiệm HIV </p>' +
            '<p>Tại khoa phòng cụ thể, các bác sĩ sẽ căn cứ vào tình trạng sức khoẻ và những yếu tố nguy cơ bệnh để ' +
            'chỉ định làm xét nghiệm máu.</p>'
    },
    {
        image:  'https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_5.jpg?1677379206119',
        title: 'Xét nghiệm di truyền',
        content: '<p style="margin:4px 0">' + 
            'Xét nghiệm di truyền hay còn được gọi là xét nghiệm DNA, cho phép phân tích gen có khả năng gây ' +
            'bệnh di truyền, và cũng có thể được sử dụng để xác định quan hệ cha con/ mẹ con hoặc truy nguyên ' +
            'nguồn gốc tổ tiên của một người hoặc các mối quan hệ huyết thống giữa những người tham gia.</p>' +
            '<p>Bên cạnh đó, các nghiên cứu ở mức độ nhiễm sắc thể của con người theo hướng rộng mở bao gồm xét ' +
            'nghiệm sinh hóa tìm kiếm khả năng hiện diện của các bệnh di truyền, hoặc dạng đột biến của các ' +
            'gen quan trọng gia tăng nguy cơ của các rối loạn di truyền. Xét nghiệm di truyền học xác định ' +
            'sự thay đổi trong nhiễm s...</p>'
    },
    {
        image:  'https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_6.jpg?1677379206119',
        title: 'Tế bào học',
        content: '<p style="margin:4px 0">' + 
            'Xét nghiệm tế bào học (Cytology hoặc Cytopathology) là xét nghiệm thông dụng và có giá trị cao.' +
            'Xét nghiệm tế bào học khảo sát các tế bào rời hoặc một cụm tế bào lẫn trong chất dịch lỏng ' +
            'thấy được trên kính hiển vi. Có khi chỉ cần một giọt máu hoặc chất dịch như trong xét nghiệm ' +
            'FNA, nhưng có khi phải cần đến cả chai chất dịch màng phổi hoặc ổ bụng.</p>' +
            '<p style="margin:4px 0">Lấy một mẫu thử tế bào, ít gây mệt, ít gây biến chứng và đỡ tốn kém hơn ' +
            'cho người bệnh so với sinh thiết mô bệnh học.</p>' +
            '<p style="margin:4px 0">Trong nhiều trường hợp, sinh thiết cho kết quả chính xác hơn. Tuy nhiên, ' +
            'với một số trường hợp...</p>'
    },
];
const listProduct = [
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-do-huyet-ap-co-tay-beurer-bc30-6b297beb-3565-4c5e-bfbe-1c34b167f35d.jpg?v=1585510030550',
        title: 'Máy đo huyết áp cổ tay Đức',
        price: 1000000
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-do-huyet-ap-co-tay-beurer-bc30-6b297beb-3565-4c5e-bfbe-1c34b167f35d.jpg?v=1585510030550',
        title: '2',
        price: 1000000
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-do-huyet-ap-co-tay-beurer-bc30-6b297beb-3565-4c5e-bfbe-1c34b167f35d.jpg?v=1585510030550',
        title: '3',
        price: 1000000
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-do-huyet-ap-co-tay-beurer-bc30-6b297beb-3565-4c5e-bfbe-1c34b167f35d.jpg?v=1585510030550',
        title: 'Máy đo huyết áp cổ tay Đức',
        price: 1000000
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-do-huyet-ap-co-tay-beurer-bc30-6b297beb-3565-4c5e-bfbe-1c34b167f35d.jpg?v=1585510030550',
        title: 'Máy đo huyết áp cổ tay Đức',
        price: 1000000
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-do-huyet-ap-co-tay-beurer-bc30-6b297beb-3565-4c5e-bfbe-1c34b167f35d.jpg?v=1585510030550',
        title: 'Máy đo huyết áp cổ tay Đức',
        price: 1000000
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-do-huyet-ap-co-tay-beurer-bc30-6b297beb-3565-4c5e-bfbe-1c34b167f35d.jpg?v=1585510030550',
        title: 'Máy đo huyết áp cổ tay Đức',
        price: 1000000
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-do-huyet-ap-co-tay-beurer-bc30-6b297beb-3565-4c5e-bfbe-1c34b167f35d.jpg?v=1585510030550',
        title: 'Máy đo huyết áp cổ tay Đức',
        price: 1000000
    },
]
const listNews = [
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/articles/kham-suc-khoe-the-xanh-la-gi-1.jpg?v=1585508387523',
        title: 'Vinmec lập các chốt kiểm dịch 2019 – nCoV',
        date: '12-06-2023'
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/articles/auc1576544994.jpg?v=1585508274013',
        title: 'Biến chứng của phẫu thuật cắt túi mật nội soi',
        date: '13-06-2023'
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/articles/20190218-105741-902066-goi-kham-suc-khoe-max-800x800.jpg?v=1585508206147',
        title: 'Sỏi túi mật hình thành thế nào và điều trị ra sao?',
        date: '14-06-2023'
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/articles/thumbnail.jpg?v=1585508103373',
        title: 'Các phương pháp điều trị u tuyến thượng thận',
        date: '15-06-2023'
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/articles/can-zinc-really-help-protect-you-from-covid-19-800x600.jpg?v=1585508015070',
        title: 'Phẫu thuật điều trị hẹp khúc nối bể thận - niệu quản',
        date: '12-06-2023'
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/articles/menomonie-prepares-for-covid-19-800x600.jpg?v=1585507918543',
        title: 'Những lưu ý quan trọng trước khi khám sức khỏe tổng quát',
        date: '18-06-2023'
    },
    {
        image:  'https://bizweb.dktcdn.net/thumb/large/100/382/483/articles/covid-800-x-600.jpg?v=1585507806647',
        title: 'Có nên trì hoãn việc tiêm chủng trong đợt dịch Covid-19?',
        date: '11-06-2023'
    },
]
const HomePage = () => {
    const [Exam, setExam] = useState([]);
    const [numColumns, setNumColumns] = useState(4);
    useEffect(() => {
        const updateNumColumns = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 992) {
                setNumColumns(3);
        } else {
            setNumColumns(4);
        }
        };

        window.addEventListener("resize", updateNumColumns);
        updateNumColumns();

        return () => {
        window.removeEventListener("resize", updateNumColumns);
    };
    }, []);
    const filteredProducts = listProduct.slice(0, numColumns === 3 ? 6 : 8);
    const filteredNews = listNews.slice(0, 3);
    useEffect(() => {
        window.scrollTo(0, 0)

        let btn_List = document.querySelectorAll('.btn-focus');
        btn_List.forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.btn_new_focus').classList.remove('btn_new_focus');
                btn.classList.add('btn_new_focus');
            })
        })

        setExam(listExam.filter(item => item.title === 'Tầm soát ung thư'));
    },[])

    return <>
        <Banner/>
        <section className="home-section-1">
            <div className="section_about">
                <Container>
                    <Row>
                        <Col md={5} className="row row-cols-2 g-4" style={{marginTop:"0"}}>
                                <Col md={6} lg={6} style={{margin:"12px 0"}}>
                                    <Card style={{textAlign:"left"}}>
                                        <Card.Body>
                                            <Card.Title className="about_card-number">1</Card.Title>
                                            <Card.Text className="about_card-text">Thiết bị hiện đại</Card.Text>
                                            <Card.Text className="about_card-decor"/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={6} style={{margin:"12px 0"}}>
                                    <Card style={{textAlign:"left"}}>
                                        <Card.Body>
                                            <Card.Title className="about_card-number">2</Card.Title>
                                            <Card.Text className="about_card-text">Chất lượng cao</Card.Text>
                                            <Card.Text className="about_card-decor"/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={6} style={{margin:"12px 0"}}>
                                    <Card style={{textAlign:"left"}}>
                                        <Card.Body>
                                            <Card.Title className="about_card-number">3</Card.Title>
                                            <Card.Text className="about_card-text">Đội ngũ lành nghề</Card.Text>
                                            <Card.Text className="about_card-decor"/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={6} style={{margin:"12px 0"}}>
                                    <Card style={{textAlign:"left"}}>
                                        <Card.Body>
                                            <Card.Title className="about_card-number">4</Card.Title>
                                            <Card.Text className="about_card-text">Chăm sóc chu đáo</Card.Text>
                                            <Card.Text className="about_card-decor"/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                        </Col>
                        <Col md={7} style={{textAlign:"left"}}>
                            <h5 style={{color:"#00bcd4"}}>Giới thiệu</h5>
                            <h3>Chứng nhận</h3>
                            <h3 style={{marginBottom:"24px"}}>Xét nghiệm <span style={{color:"#00bcd4"}}>chuẩn đoán</span></h3>
                            <p style={{textAlign:"justify"}}>Ego Medical Center tự hào về các kỹ năng được đào tạo cần thiết cho việc chuẩn bị kiểm tra đa dạng. 
                                Chúng tôi tin tưởng rằng chẩn đoán kịp thời có thể loại bỏ vết sẹo của nhiều bệnh nghiêm trọng. 
                                Nó có thể được thực hiện nếu bạn tham khảo ý kiến bác sĩ cho các bệnh nghi ngờ.</p>
                            <p style={{margin:"4px 0"}}>&#10004;Tất cả các báo cáo cho khách hàng được thực hiện đơn giản và dễ hiểu</p>
                            <p style={{margin:"4px 0"}}>&#10004;Trang web thân thiện với người dùng</p>
                            <p style={{margin:"4px 0"}}>&#10004;Trang web dễ dàng được tùy chỉnh dựa vào thiết lập tối ưu.</p>
                            <Button to="/dat-lich-hen" style={{backgroundColor:"#00bcd4", borderRadius:"20px", border:"none", marginTop:"24px"}}>Đặt lịch ngay &#10140;</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        <section className="home-section-2">
            <div className="section_service">
                <Container>
                    <Row className="title">
                        <h1>Xét nghiệm chuẩn đoán</h1>
                        <p className="about_card-decor"></p>
                    </Row>
                    {/* <Row className="nav">
                        <Tabs
                            defaultActiveKey="kod-1"
                            id="justify-tab-example"
                            className="mb-3"
                            justify
                        >
                            <Tab eventKey="kod-1" title="Tầm soát ung thư">
                                <Row>
                                    <Col md={5}>
                                        <img style={{width:'100%'}} alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_1.jpg?1677379206119"/>
                                    </Col>
                                    <Col md={7}>
                                        <h1>Tầm soát ung thư</h1>
                                        <p style={{margin:"4px 0"}}>
                                            Mỗi năm Việt Nam có hơn 126.000 ca mắc mới mắc bệnh ung thư, trong số đó khoảng 
                                            94.000 người tử vong vì phát hiện quá muộn. Việt Nam cũng là một trong những quốc 
                                            gia có tỷ lệ người dân đi tầm soát ung thư thấp nhất. Nếu được tầm soát và phát hiện 
                                            sớm, những căn bệnh ung thư sau có thể chữa khỏi hoàn toàn:
                                        </p>
                                        <p style={{margin:"4px 0"}}>&#10004;Ung thư phổi</p>
                                        <p style={{margin:"4px 0"}}>&#10004;Ung thư gan</p>
                                        <p style={{margin:"4px 0"}}>&#10004;Ung thư dạ dày</p>
                                        <p style={{margin:"4px 0"}}>&#10004;Ung thư vú</p>
                                        <p style={{margin:"4px 0"}}>&#10004;Ung thư cổ tử cung</p>
                                        <p>Tầm soát ung thư là phương thức chẩn đoán nhằm phát hiện ra mầm mống ung thư hoặc khi khối u c...</p>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="kod-2" title="Mô học">
                                <Row>
                                    <Col md={5}>
                                        <img style={{width:'100%'}} alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_2.jpg?1677379206119"/>
                                    </Col>
                                    <Col md={7}>
                                        <h1>Mô học</h1>
                                        <p style={{margin:"4px 0"}}>
                                            Xét nghiệm chẩn đoán mô bệnh học là xét nghiệm thực hiện trên mẫu mô sau sinh thiết nội soi, sinh thiết kim hoặc 
                                            trong bệnh phẩm phẫu thuật. Bệnh phẩm được bảo quản trong môi trường formol pha theo tỷ lệ quy định rồi được chuyển 
                                            về phòng xét nghiệm giải phẫu bệnh. 
                                        </p>
                                        <p>Tại đây, mẫu bệnh phẩm được xử lí theo đúng quy trình xét nghiệm để đưa ra kết quả chính xác nhất. Kết quả xét nghiệm 
                                            này là tiêu chuẩn vàng trong chẩn đoán bệnh lí ác tính. </p>
                                        <p>Xét nghiệm chẩn đoán hóa mô miễn dịch nhằm giúp xác định chính xác nguồn gốc của các khối u 
                                            kém biệt hóa. Xét nghiệm này thường đ...</p>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="kod-3" title="Khám tổng quát">
                                <Row>
                                    <Col md={5}>
                                        <img style={{width:'100%'}} alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_3.jpg?1677379206119"/>
                                    </Col>
                                    <Col md={7}>
                                        <h1>Khám tổng quát</h1> 
                                        <p style={{margin:"4px 0"}}>&#10004;Xét nghiệm chỉ số máu (nhằm phát hiện tình trạng thiếu máu và 
                                            một số bệnh lý về máu, chẩn đoán tiểu đường và dung nạp Glucose, đánh giá chức năng thận, chức năng 
                                            gan, tầm soát virus viêm gan B…)i</p>
                                        <p style={{margin:"4px 0"}}>&#10004;Xét nghiệm nước tiểu, nhằm phát hiện một số bệnh lý về thận, tiết niệu…</p>
                                        <p style={{margin:"4px 0"}}>&#10004;Chẩn đoán hình ảnh, thăm dò chức năng (gồm: Chụp X Quang ngực thẳng, 
                                            điện tim đồ, siêu âm ổ bụng tổng quát thường, chụp CT…).</p>
                                        <p>Tự hào là bệnh viện lớn, được xây dựng theo tiêu chuẩn “Bệnh viện – Khách sạn và lọt Top 3 bệnh viện 
                                            có điểm chất lượng cao nhất – Bệnh viện ĐKQT Ego Medical là địa chỉ uy tín được nhiều doanh nghiệp đăng...</p>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="kod-4" title="Xét nghiệm máu">
                                <Row>
                                    <Col md={5}>
                                        <img style={{width:'100%'}} alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_4.jpg?1677379206119"/>
                                    </Col>
                                    <Col md={7}>
                                        <h1>Xét nghiệm máu</h1>
                                        <p style={{margin:"4px 0"}}>
                                        Có rất nhiểu bệnh có thể phát hiện được qua xét nghiệm máu. Thông thường khi khám sức khỏe bác sĩ sẽ 
                                        chỉ định thực hiện những xét nghiệm máu sau:
                                        </p>
                                        <p style={{margin:"4px 0"}}>&#10004;Xét nghiệm công thức máu</p>
                                        <p style={{margin:"4px 0"}}>&#10004;Xét nghiệm đường máu</p>
                                        <p style={{margin:"4px 0"}}>&#10004;Xét nghiệm mỡ máu</p>
                                        <p style={{margin:"4px 0"}}>&#10004;Xét nghiệm viêm gan B</p>
                                        <p style={{margin:"4px 0"}}>&#10004;Xét nghiệm HIV </p>
                                        <p>Tại khoa phòng cụ thể, các bác sĩ sẽ căn cứ vào tình trạng sức khoẻ và những yếu tố nguy cơ bệnh để 
                                            chỉ định làm xét nghiệm máu.</p>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="kod-5" title="Xét nghiệm di truyền">
                                <Row>
                                    <Col md={5}>
                                        <img style={{width:'100%'}} alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_5.jpg?1677379206119"/>
                                    </Col>
                                    <Col md={7}>
                                        <h1>Xét nghiệm di truyền</h1>
                                        <p style={{margin:"4px 0"}}>
                                            Xét nghiệm di truyền hay còn được gọi là xét nghiệm DNA, cho phép phân tích gen có khả năng gây 
                                            bệnh di truyền, và cũng có thể được sử dụng để xác định quan hệ cha con/ mẹ con hoặc truy nguyên 
                                            nguồn gốc tổ tiên của một người hoặc các mối quan hệ huyết thống giữa những người tham gia.
                                        </p>
                                        <p>Bên cạnh đó, các nghiên cứu ở mức độ nhiễm sắc thể của con người theo hướng rộng mở bao gồm xét 
                                            nghiệm sinh hóa tìm kiếm khả năng hiện diện của các bệnh di truyền, hoặc dạng đột biến của các 
                                            gen quan trọng gia tăng nguy cơ của các rối loạn di truyền. Xét nghiệm di truyền học xác định 
                                            sự thay đổi trong nhiễm s...</p>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="kod-6" title="Tế bào học">
                                <Row>
                                    <Col md={5}>
                                        <img style={{width:'100%'}} alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_6.jpg?1677379206119"/>
                                    </Col>
                                    <Col md={7}>
                                        <h1>Tế bào học</h1>
                                        <p style={{margin:"4px 0"}}>
                                            Xét nghiệm tế bào học (Cytology hoặc Cytopathology) là xét nghiệm thông dụng và có giá trị cao.
                                            Xét nghiệm tế bào học khảo sát các tế bào rời hoặc một cụm tế bào lẫn trong chất dịch lỏng 
                                            thấy được trên kính hiển vi. Có khi chỉ cần một giọt máu hoặc chất dịch như trong xét nghiệm 
                                            FNA, nhưng có khi phải cần đến cả chai chất dịch màng phổi hoặc ổ bụng.
                                        </p>
                                        <p style={{margin:"4px 0"}}>Lấy một mẫu thử tế bào, ít gây mệt, ít gây biến chứng và đỡ tốn kém hơn 
                                            cho người bệnh so với sinh thiết mô bệnh học.</p>
                                        <p style={{margin:"4px 0"}}>Trong nhiều trường hợp, sinh thiết cho kết quả chính xác hơn. Tuy nhiên, 
                                            với một số trường hợp...</p>
                                    </Col>
                                </Row>
                            </Tab>
                        </Tabs>
                    </Row> */}
                    <Row className="col-new-mobile">
                        <Swiper
                                scrollbar={{
                                    hide: false,
                                }}
                                modules={[Scrollbar]}
                                slidesPerView={4}
                                className="mySwiper"
                                breakpoints={
                                    {
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10
                                        }, 200: {
                                            slidesPerView: 2,
                                            spaceBetween: 10
                                        }, 500: {
                                            slidesPerView: 3,
                                            spaceBetween: 15
                                        }, 650: {
                                            slidesPerView: 4,
                                            spaceBetween: 20
                                        }

                                    }
                                }
                            >
                            <SwiperSlide>
                                <button className='btn-test btn-focus btn_new_focus' autoFocus={true}
                                    onClick={()=>setExam(listExam.filter(item=>item.title==='Tầm soát ung thư'))}>
                                    <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_1.png?1677379206119"/>
                                    <p>Tầm soát ung thư</p>
                                </button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <button className='btn-test btn-focus' 
                                    onClick={()=>setExam(listExam.filter(item=>item.title==='Mô học'))}>
                                    <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_2.png?1677379206119"/>
                                    <p>Mô học</p>
                                </button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <button className='btn-test btn-focus' 
                                    onClick={()=>setExam(listExam.filter(item=>item.title==='Khám tổng quát'))}>
                                    <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_3.png?1677379206119"/>
                                    <p>Khám tổng quát</p>
                                </button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <button className='btn-test btn-focus' 
                                    onClick={()=>setExam(listExam.filter(item=>item.title==='Xét nghiệm máu'))}>
                                    <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_4.png?1677379206119"/>
                                    <p>Xét nghiệm máu</p>
                                </button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <button className='btn-test btn-focus' 
                                    onClick={()=>setExam(listExam.filter(item=>item.title==='Xét nghiệm di truyền'))}>
                                    <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_5.png?1677379206119"/>
                                    <p>Xét nghiệm di truyền</p>
                                </button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <button className='btn-test btn-focus' 
                                    onClick={()=>setExam(listExam.filter(item=>item.title==='Tế bào học'))}>
                                    <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_6.png?1677379206119"/>
                                    <p>Tế bào học</p>
                                </button>
                            </SwiperSlide>
                        </Swiper>
                    </Row>
                    <Row className="button-container">
                        <button className='btn-test btn-focus btn_new_focus' autoFocus={true}
                            onClick={()=>setExam(listExam.filter(item=>item.title==='Tầm soát ung thư'))}>
                            <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_1.png?1677379206119"/>
                            <p>Tầm soát ung thư</p>
                        </button>
                        <button className='btn-test btn-focus' 
                            onClick={()=>setExam(listExam.filter(item=>item.title==='Mô học'))}>
                            <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_2.png?1677379206119"/>
                            <p>Mô học</p>
                        </button>
                        <button className='btn-test btn-focus' 
                            onClick={()=>setExam(listExam.filter(item=>item.title==='Khám tổng quát'))}>
                            <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_3.png?1677379206119"/>
                            <p>Khám tổng quát</p>
                        </button>
                        <button className='btn-test btn-focus' 
                            onClick={()=>setExam(listExam.filter(item=>item.title==='Xét nghiệm máu'))}>
                            <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_4.png?1677379206119"/>
                            <p>Xét nghiệm máu</p>
                        </button>
                        <button className='btn-test btn-focus' 
                            onClick={()=>setExam(listExam.filter(item=>item.title==='Xét nghiệm di truyền'))}>
                            <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_5.png?1677379206119"/>
                            <p>Xét nghiệm di truyền</p>
                        </button>
                        <button className='btn-test btn-focus' 
                            onClick={()=>setExam(listExam.filter(item=>item.title==='Tế bào học'))}>
                            <img alt="" src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_6.png?1677379206119"/>
                            <p>Tế bào học</p>
                        </button>
                    </Row>
                    <Row className="content">
                        {Exam.map(item => 
                            <Row>
                                <Col md={5}>
                                    <img style={{width:'100%'}} alt="" src={item.image}/>
                                </Col>
                                <Col md={7}>
                                    <h4>{item.title}</h4>
                                    <div dangerouslySetInnerHTML={{ __html: item.content }} style={{textAlign:"justify"}}></div>
                                </Col>
                            </Row>
                        )}       
                    </Row>
                </Container>
            </div>
        </section>
        <section className="home-section-3">
            <div className="section_product">   
                <Container>
                    <Row className="title">
                        <h1>Sản phẩm y tế</h1>
                        <p className="about_card-decor"></p>
                    </Row>
                    <Row className="section_product-card">
                        {filteredProducts.map(item=>
                            <Col md={4} lg={3} style={{margin:"12px 0"}}>
                                <Link className="card-link" to={`/product/${item.title}`}>
                                    <Card style={{textAlign:"left"}}>
                                        <Card.Body>
                                            <Card.Img src={item.image}/>
                                            <Card.Title className="product-title">{item.title}</Card.Title>
                                            <Card.Text className="product-price">{item.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        </section>
        <section className="home-section-4">
            <div className="section_achievement">
                <Container>
                    <Row className="title">
                        <h1>Tin tức và sự kiện</h1>
                        <p className="about_card-decor"></p>
                    </Row>
                    <Row className="content">
                        {filteredNews.map(item => 
                            <Col>
                                <img style={{width:'100%'}} alt="" src={item.image}/>
                                <h6>{item.date}</h6>
                                <h4>{item.title}</h4>
                            </Col>
                        )}       
                    </Row>
                </Container>
            </div>
        </section>
        <section className="home-section-5">
            <div className="section_news">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </section>
    </>;
}
export default HomePage;