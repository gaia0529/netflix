import routes from "../routes";

export const home = async (req, res) => {
  try {
    res.render("home", { title: "Main" });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
