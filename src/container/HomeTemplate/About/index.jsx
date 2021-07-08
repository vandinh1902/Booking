import { CardMedia, Tab } from "@material-ui/core";
import React from "react";
import { useStyle } from "./style";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const About = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const classes = useStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.bgColor}>
      <Box className={classes.container}>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={`${classes.tabs} ${classes.bgTabs}`}
          >
            <Tab label="Giới thiệu" {...a11yProps(0)} />
            <Tab label="Liên hệ Alita" {...a11yProps(1)} />
            <Tab label="Điều khoản chung" {...a11yProps(2)} />
            <Tab label="Chính sách thanh toán" {...a11yProps(3)} />
            <Tab label="Chính sách bảo mật" {...a11yProps(4)} />
            <Tab label="Câu hỏi thường gặp" {...a11yProps(5)} />
          </Tabs>
          <TabPanel value={value} index={0} classes={classes.tabPanel}>
            <Box className={classes.wrappedPanel}>
              <Typography
                variant="h4"
                style={{ display: "block", marginBottom: "1rem" }}
              >
                Giới thiệu CGV
              </Typography>
              {/* <CardMedia
              component="iframe"
              title="test"
              src="https://www.youtube.com/embed/hKRUPYrAQoE"
            /> */}
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/R5qVLLIDpME"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <Typography style={{ marginTop: "2rem" }}>
                CJ CGV là một trong top 5 cụm rạp chiếu phim lớn nhất toàn cầu
                và là nhà phát hành, cụm rạp chiếu phim lớn nhất Việt Nam.Mục
                tiêu của chúng tôi là trở thành hình mẫu công ty điển hình đóng
                góp cho sự phát triển không ngừng của ngành công nghiệp điện ảnh
                Việt Nam.
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography>
                CJ CGV đã tạo nên khái niệm độc đáo về việc chuyển đổi rạp chiếu
                phim truyền thống thành tổ hợp văn hóa “Cultureplex”, nơi khán
                giả không chỉ đến thưởng thức điện ảnh đa dạng thông qua các
                công nghệ tiên tiến như SCREENX, IMAX, STARIUM, 4DX, Dolby
                Atmos, cũng như thưởng thức ẩm thực hoàn toàn mới và khác biệt
                trong khi trải nghiệm dịch vụ chất lượng nhất tại CGV.
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography>
                Thông qua những nỗ lực trong việc xây dựng chương trình Nhà biên
                kịch tài năng, Dự án phim ngắn CJ, Lớp học làm phim TOTO, CGV
                ArtHouse cùng việc tài trợ cho các hoạt động liên hoan phim lớn
                trong nước như Liên hoan Phim quốc tế Hà Nội, Liên hoan Phim
                Việt Nam, CJ CGV Việt Nam mong muốn sẽ khám phá và hỗ trợ phát
                triển cho các nhà làm phim trẻ tài năng của Việt Nam.
              </Typography>
              <Typography>&nbsp;</Typography>

              <Typography>
                CJ CGV Việt Nam cũng tập trung quan tâm đến đối tượng khán giả ở
                các khu vực không có điều kiện tiếp cận nhiều với điện ảnh, bằng
                cách tạo cơ hội để họ có thể thưởng thức những bộ phim chất
                lượng cao thông qua các chương trình vì cộng đồng như Trăng cười
                và Điện ảnh cho mọi người.
              </Typography>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box className={classes.wrappedPanel}>
              <Box>
                <Typography
                  variant="h5"
                  align="center"
                  style={{ fontWeight: "700", color: "red" }}
                >
                  CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN KHÁCH HÀNG
                </Typography>
              </Box>
              <Box style={{ marginTop: "2rem" }}>
                <Typography style={{ fontWeight: "500" }}>
                  1. Mục đích và phạm vi thu thập thông tin
                </Typography>
                <Typography>&nbsp;</Typography>
                <Typography>
                  1.1 Việc thu thập thông tin cá nhân được thực hiện trên cơ sở
                  khách hàng tự khai báo để đăng ký thành viên CGV tại website
                  www.cgv.vn, tùy từng thời điểm, thông tin thu thập sẽ bao gồm
                  nhưng không giới hạn ở:
                </Typography>
                <Typography>
                  - Thông tin cá nhân như: họ tên, giới tính, độ tuổi, số CMND.
                </Typography>
                <Typography>
                  - Thông tin liên lạc như: địa chỉ, số điện thoại di động,
                  email/fax.
                </Typography>
                <Typography>
                  - Các thông tin khác phục vụ cho chương trình khách hàng thân
                  thiết (nếu có).
                </Typography>
                <Typography>&nbsp;</Typography>

                <Typography style={{ fontWeight: "500" }}>
                  1.2 Mục đích thu thập thông tin khách hàng bao gồm:
                </Typography>
                <Typography>&nbsp;</Typography>

                <Typography>
                  (i) Cung cấp các dịch vụ, sản phẩm theo nhu cầu của khách
                  hàng;
                </Typography>
                <Typography>
                  (ii) Liên hệ xác nhận khi khách hàng đăng ký sử dụng dịch vụ,
                  xác lập giao dịch trên website www.cgv.vn;
                </Typography>
                <Typography>
                  (iii) Thực hiện việc quản lý website www.cgv.vn, gửi thông tin
                  cập nhật về website, các chương trình khuyến mại, ưu đãi/tri
                  ân tới khách hàng;
                </Typography>
                <Typography>
                  (iv) Bảo đảm quyền lợi của khách hàng khi phát hiện các hành
                  động giả mạo, phá hoại tài khoản, lừa đảo khách hàng;
                </Typography>
                <Typography>
                  (v) Liên lạc, hỗ trợ, giải quyết với khách hàng trong các
                  trường hợp đặc biệt.
                </Typography>
                <Typography>&nbsp;</Typography>
                <Typography style={{ fontWeight: "500" }}>
                  5. Cách thức chỉnh sửa dữ liệu cá nhân
                </Typography>
                <Typography>&nbsp;</Typography>

                <Typography>
                  Để chỉnh sửa dữ liệu cá nhân của mình trên hệ thống thương mại
                  điện tử của CGV, khách hàng có thể tự đăng nhập và chỉnh sửa
                  thông tin, dữ liệu cá nhân, ngoại trừ các thông tin về Họ tên,
                  Giới tính, Ngày sinh và Chứng minh nhân dân.
                </Typography>
                <Typography>&nbsp;</Typography>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Điều khoản chung
          </TabPanel>
          <TabPanel value={value} index={5}>
            Chính sách thanh toán
          </TabPanel>
          <TabPanel value={value} index={3}>
            Chính sách bảo mật
          </TabPanel>
          <TabPanel value={value} index={4}>
            Câu hỏi thường gặp
          </TabPanel>
        </div>
      </Box>
    </Box>
  );
};

export default React.memo(About);
