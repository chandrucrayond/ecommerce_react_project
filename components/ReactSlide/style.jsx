import { ThemeProvider, makeStyles } from "@mui/styles";


export const sliderStyle = makeStyles((theme) => ({
        sliderContainer: {
            // width: 150,
            // height: 175,
            // justifyContent: "center",
            "& .slick-next:before, .slick-prev:before": {
                color: "lightGrey !important",
                fontSize: "25px !important",
            },
            "& .slick-arrow.slick-next": {
                right: "30px",         
            },
            "& .slick-prev": {
                zIndex: '2',
                left: "30px",
            },
            "& .slick-slide.slick-active.slick-current>div>div": {
                display: "flex !important", 
                justifyContent: "center !important", 
                alignItems: "center",
              },

            //  "& .slick-prev,.slick-next" :{
            //         display:'block !important',
            //         width: '30px !important',
            //   },
        },
}));