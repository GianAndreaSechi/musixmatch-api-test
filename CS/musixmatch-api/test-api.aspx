<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="test-api.aspx.cs" Inherits="musixmatch_api.test_api" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>MusiXMatch API Tester</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="./css/style.css" rel="stylesheet" type="text/css">
    <link rel="icon" href="./favicon.png" type="image/png"/>
</head>
<body>
    <form id="form1" runat="server">
        <nav class="navbar justify-content-center navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="logo.png" width="30" height="30" alt="">
            </a>
        </nav>
        <div class="container-fluid">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-3">
                        <div class="col-md-12 sidebar">
                            <div id="dvChartsArtists" runat="server" class="sidebar-item">
                                <asp:LinkButton id="lnkChartsArtists" OnClick="lnkChartsArtists_Click" runat="server" >Classifica Artisti</asp:LinkButton>
                            </div>
                            <div id="dvChartsTracks" runat="server" class="sidebar-item">
                                <asp:LinkButton id="lnkChartsTracks" OnClick="lnkChartsTracks_Click" runat="server" >Classifica Canzoni</asp:LinkButton>
                            </div>
                            <div id="dvSearch" runat="server" class="sidebar-item">
                                <asp:LinkButton id="lnkSeach" OnClick="lnkSearch_Click" runat="server" >Cerca</asp:LinkButton>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div id="dvSearchContainer" runat="server" class="col-md-12" visible="false">
                            <div class="row">
                                <div class="col-md-3">
                                    <select id="searchType" runat="server" class="form-select">
                                        <option value="q_track">Titolo Canzone</option>
                                        <option value="q_artist">Artista Canzone</option>
                                        <option value="q_track_artist">Titolo + Artista Canzone</option>
                                        <option value="q_lyrics">Interno Lyrics</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <input id="searchValue" runat="server" type="text" class="form-control" placeholder="Inserisci la ricerca..." />
                                </div>
                                <div class="col-md-3">
                                    <asp:LinkButton id="lnkSearchButton" OnClick="lnkSearchButton_Click" class="btn btn-search" runat="server" >Cerca</asp:LinkButton>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div id="dvApiContainer" runat="server" class="col-md-12">
                            <h1>
                                Testa le Api MusiXMatch tramite il menu a lato.
                            </h1>
                        </div>
                        <asp:Repeater ID="rptApiArtists" runat="server">
                            <ItemTemplate>
                                <div class="api-row" runat="server">
                                    <asp:Label ID="lbltitle" runat="server" CssClass="title" Text='<%# Eval("artist") %>'></asp:Label><br />
                                    <asp:Label ID="lblDescription" runat="server" CssClass="description" Text='<%# "#"+Eval("artist_rating") %>'></asp:Label>
                                </div>
                            </ItemTemplate>
                        </asp:Repeater>
                        <asp:Repeater ID="rptApiTracks" runat="server" Visible="false">
                            <ItemTemplate>
                                <div class="api-row" runat="server">
                                    <asp:Label ID="lbltitle" runat="server" CssClass="title" Text='<%# Eval("track") %>'></asp:Label><br />
                                    <asp:Label ID="lblDescription" runat="server" CssClass="description" Text='<%# string.Concat(Eval("artist")," - ", Eval("album")) %>'></asp:Label>
                                </div>
                            </ItemTemplate>
                        </asp:Repeater>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
