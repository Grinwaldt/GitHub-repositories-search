using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GitHub_repositories_search.Models;

namespace GitHub_repositories_search.Controllers
{
    public class RepositoriesController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Bookmarks()
        {
            return View();
        }
        //Returns updated repositories list
        public ActionResult UpdateRepositoriesList(RepositoryModel repository)
        {
            Console.WriteLine(repository    );
            
            //TODO :SET SESSION 
            var repositoriesList = HttpContext.Session["items"] as List<RepositoryModel>;

            if (repositoriesList == null)
                repositoriesList = new List<RepositoryModel>();
            repositoriesList.Add(repository);

            HttpContext.Session["items"] = repositoriesList;
            Console.WriteLine(HttpContext.Session["items"]);

            return Json(repositoriesList, JsonRequestBehavior.AllowGet);
        }

        //get bookmarks list as json 
        public ActionResult GetBookmarksList()
        {
            var bookmarksList = HttpContext.Session["items"] as List<RepositoryModel>;
            Console.WriteLine(bookmarksList);

            return Json(bookmarksList, JsonRequestBehavior.AllowGet);
        }
    }
}