using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Configuration;
using System.Net.Http;
using Newtonsoft.Json;

namespace musixmatch_api
{ 
    /*Object container for useful data*/
    public class mxm_api_object
    {
        public string id { get; set; }
        public string artist { get; set; }
        public string track { get; set; }
        public string album { get; set; }
        public string artist_rating { get; set; }
    }
    public class mxm_api_methods
    {
        public dynamic chart_artists() {
            /*this function call the method chart.artists.get and create a list of mxm_api_object to store useful information*/
            string endpoint = ConfigurationManager.AppSettings["mxm_endpoint"];
            string api_key = ConfigurationManager.AppSettings["mxm_api_key"];

            string url = string.Concat(endpoint, "chart.artists.get");
            string urlParameters = string.Concat("?page=1&page_size=5&country=it&apikey=", api_key);

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(url);

            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage response = client.GetAsync(urlParameters).Result;

            List<mxm_api_object> Artists = new List<mxm_api_object>();

            if (response.IsSuccessStatusCode)
            {
                var dataObjects = response.Content.ReadAsStringAsync();
                Artists = parseJson(dataObjects, true);
            }

            return Artists;
        }
        public dynamic chart_tracks()
        {
            /*this function call the method chart.tracks.get and create a list of mxm_api_object to store useful information*/
            string endpoint = ConfigurationManager.AppSettings["mxm_endpoint"];
            string api_key = ConfigurationManager.AppSettings["mxm_api_key"];

            string url = string.Concat(endpoint, "chart.tracks.get");
            string urlParameters = string.Concat("?page=1&page_size=5&country=it&apikey=", api_key);

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(url);

            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage response = client.GetAsync(urlParameters).Result;

            List<mxm_api_object> Tracks = new List<mxm_api_object>();

            if (response.IsSuccessStatusCode)
            {
                var dataObjects = response.Content.ReadAsStringAsync();
                Tracks = parseJson(dataObjects, false);
            }

            return Tracks;
        }
        public dynamic search_tracks(string s_method, string s_value)
        {
            /*this function call the method track.search and create a list of mxm_api_object to store useful information*/
            string endpoint = ConfigurationManager.AppSettings["mxm_endpoint"];
            string api_key = ConfigurationManager.AppSettings["mxm_api_key"];

            string url = string.Concat(endpoint, "track.search");
            string urlParameters = string.Concat("?",s_method,"=",s_value,"&page=1&page_size=5&s_track_reating=desc&apikey=", api_key);

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(url);

            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage response = client.GetAsync(urlParameters).Result;

            List<mxm_api_object> Tracks = new List<mxm_api_object>();

            if (response.IsSuccessStatusCode)
            {
                var dataObjects = response.Content.ReadAsStringAsync();
                Tracks = parseJson(dataObjects, false);
            }

            return Tracks;
        }
        public List<mxm_api_object> parseJson(dynamic dataObjects, bool isArtist)
        {
            /*generating a list of mxm_api_object in oreder to access easly to the information*/
            dynamic json;
            json = JsonConvert.DeserializeObject<dynamic>(dataObjects.Result);

            List<mxm_api_object> items = new List<mxm_api_object>();
            if (isArtist){
                foreach (dynamic Artist in json["message"]["body"]["artist_list"])
                {
                    mxm_api_object item = new mxm_api_object();

                    item.id = Artist["artist"]["artist_id"];
                    item.artist = Artist["artist"]["artist_name"];
                    item.track = "";
                    item.album = "";
                    item.artist_rating = Artist["artist"]["artist_rating"];

                    items.Add(item);
                }
            } 
            else
            {
                foreach (dynamic Track in json["message"]["body"]["track_list"])
                {
                    mxm_api_object item = new mxm_api_object();

                    item.id = Track["track"]["track_id"];
                    item.artist = Track["track"]["artist_name"];
                    item.track = Track["track"]["track_name"];
                    item.album = Track["track"]["album_name"];
                    item.artist_rating = "";

                    items.Add(item);
                }
            }
            
            return items;
        }
    }
}