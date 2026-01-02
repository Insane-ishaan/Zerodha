import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Apps() {
  return (
    <div className="row ms-3">
      <div className="row ms-5">
        <Card sx={{ maxWidth: 345 }} className="mt-5 ms-5 col-5">
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Zerodha is India’s largest stock brokerage platform, built for
              fast, reliable, and low-cost trading. Manage your investments,
              track live markets, and trade securely—all in one place.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="mt-5 ms-5 col-5">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Getting started
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Create your portfolio, add stocks to your watchlist, and track
              real-time performance. Use powerful tools to analyze markets,
              manage risk, and trade with confidence.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="row ms-5">
        <Card sx={{ maxWidth: 345 }} className="mt-5 ms-5 col-5">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Why Zerodha?
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              rade smarter with low brokerage, real-time data, and a clean,
              simple interface.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="mt-5 ms-5 col-5">
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Start your investment journey by exploring market data and
              understanding stock movements. Add stocks to your watchlist, build
              your portfolio, and monitor real-time profit and loss. Use
              built-in tools to analyze performance, manage risk, and make
              informed trading decisions with ease.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Apps;
