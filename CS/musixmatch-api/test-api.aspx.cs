using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;



namespace musixmatch_api
{
    public partial class test_api : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                dvApiContainer.Visible = true;
            }
        }
        protected void ChartArtists()
        {
            mxm_api_methods api = new mxm_api_methods();

            dynamic Artists = api.chart_artists();


            rptApiArtists.Visible = true;
            rptApiTracks.Visible = false;
            
            rptApiArtists.DataSource = Artists;
            rptApiArtists.DataBind();

        }
        protected void ChartTracks()
        {
            mxm_api_methods api = new mxm_api_methods();

            dynamic Tracks = api.chart_tracks();

            rptApiArtists.Visible = false;
            rptApiTracks.Visible = true;
            rptApiTracks.DataSource = Tracks;
            rptApiTracks.DataBind();

        }

        protected void SearchTracks()
        {
            mxm_api_methods api = new mxm_api_methods();

            string s_value = searchValue.Value;
            string s_method = searchType.Value;

            dynamic Tracks = api.search_tracks(s_method,s_value);

            rptApiArtists.Visible = false;
            rptApiTracks.Visible = true;
            rptApiTracks.DataSource = Tracks;
            rptApiTracks.DataBind();

        }
        protected void lnkChartsArtists_Click(Object sender, EventArgs e)
        {
            dvApiContainer.InnerHtml = "<h1>Top 3 Artisti</h1>";

            rptApiArtists.Visible = false;
            rptApiTracks.Visible = false;

            setActive(dvChartsArtists);

            ChartArtists();
        }
        protected void lnkChartsTracks_Click(Object sender, EventArgs e)
        {
            dvApiContainer.InnerHtml = "<h1>Top 3 Artisti</h1>";

            rptApiArtists.Visible = false;
            rptApiTracks.Visible = false;

            setActive(dvChartsTracks);

            ChartTracks();
        }
        protected void lnkSearch_Click(Object sender, EventArgs e)
        {
            dvApiContainer.InnerHtml = "<h1>Ricerca</h1>";

            dvSearchContainer.Visible = true;

            rptApiArtists.Visible = false;
            rptApiTracks.Visible = false;

            setActive(dvSearch);
        }
        protected void lnkSearchButton_Click(Object sender, EventArgs e)
        {
            rptApiArtists.Visible = false;
            rptApiTracks.Visible = false;


            SearchTracks();
        }
       protected void setActive(HtmlGenericControl container)
        {
            dvChartsArtists.Attributes["class"] = "sidebar-item";
            dvChartsTracks.Attributes["class"] = "sidebar-item";
            dvSearch.Attributes["class"] = "sidebar-item";

            container.Attributes["class"] = "sidebar-item active";
        }
    }
}