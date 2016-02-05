---
layout: default
title: Bootstrap Notifications
name: Notifications
description: Notifications are part of any serious web application. This component comes very handy when you want to quickly implement UI for notifications in your app.

---

### Notifications List

Notifications are a flexible and powerful component for displaying application messages. You have multiple options of presentation, can use either `<ul>` or `<div>` for parent element. Notification component can be used together with media object, however, it is not mandatory.

<div class="sw-example">
  <ul class="notifications">
    <li class="notification">
        <div class="media">
          <div class="media-left">
            <div class="media-object">
              <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
            </div>
          </div>
          <div class="media-body">
            <strong class="notification-title"><a href="#">Dave Lister</a> commented on <a href="#">DWARF-13 - Maintenance</a></strong>
            <p class="notification-desc">I totally don't wanna do it. Rimmer can do it.</p>

            <div class="notification-meta">
              <small class="timestamp">27. 11. 2015, 15:00</small>
            </div>
          </div>
        </div>
    </li>

    <li class="notification">
        <div class="media">
          <div class="media-left">
            <div class="media-object">
              <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
            </div>
          </div>
          <div class="media-body">
            <strong class="notification-title"><a href="#">Nikola Tesla</a> resolved <a href="#">T-14 - Awesome stuff</a></strong>

            <p class="notification-desc">Resolution: Fixed, Work log: 4h</p>

            <div class="notification-meta">
              <small class="timestamp">27. 10. 2015, 08:00</small>
            </div>

          </div>
        </div>
    </li>

    <li class="notification">
        <div class="media">
          <div class="media-left">
            <div class="media-object">
              <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
            </div>
          </div>
          <div class="media-body">
            <strong class="notification-title"><a href="#">James Bond</a> resolved <a href="#">B-007 - Desolve Spectre organization</a></strong>

            <div class="notification-meta">
              <small class="timestamp">1. 9. 2015, 08:00</small>
            </div>

          </div>
        </div>
    </li>
  </ul>
</div>

~~~html
<ul class="notifications">
  <li class="notification">
      <div class="media">
        <div class="media-left">
          <div class="media-object">
            <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
          </div>
        </div>
        <div class="media-body">
          <strong class="notification-title"><a href="#">Dave Lister</a> commented on <a href="#">DWARF-13 - Maintenance</a></strong>
          <p class="notification-desc">I totally don't wanna do it. Rimmer can do it.</p>

          <div class="notification-meta">
            <small class="timestamp">27. 11. 2015, 15:00</small>
          </div>
        </div>
      </div>
  </li>

  <li class="notification">
      <div class="media">
        <div class="media-left">
          <div class="media-object">
            <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
          </div>
        </div>
        <div class="media-body">
          <strong class="notification-title"><a href="#">Nikola Tesla</a> resolved <a href="#">T-14 - Awesome stuff</a></strong>

          <p class="notification-desc">Resolution: Fixed, Work log: 4h</p>

          <div class="notification-meta">
            <small class="timestamp">27. 10. 2015, 08:00</small>
          </div>

        </div>
      </div>
  </li>

  <li class="notification">
      <div class="media">
        <div class="media-left">
          <div class="media-object">
            <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
          </div>
        </div>
        <div class="media-body">
          <strong class="notification-title"><a href="#">James Bond</a> resolved <a href="#">B-007 - Desolve Spectre organization</a></strong>

          <div class="notification-meta">
            <small class="timestamp">1. 9. 2015, 08:00</small>
          </div>

        </div>
      </div>
  </li>
</ul>
~~~

### Dropdown Panel

With little effort, you can display notifications in toggleable dropdown component. I recommend you to use <a href="skywalkapps.github.io/bootstrap-dropmenu/">Skywalk Dropmenu</a>, an extended version of Bootstrap's dropdown menu, which adds a few nifty features (f.e. scrollable content, toolbar, footer,...).

<div class="sw-example">
  <div class="btn-group dropdown dropdown-notifications sw-open">
    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    Notifications
      <span class="caret"></span>
    </button>

    <div class="dropdown-container">
     <div class="dropdown-toolbar">
        <div class="dropdown-toolbar-actions">
          <a href="#"><i class="glyphicon glyphicon-search"></i> View All</a>
        </div>
        <h3 class="dropdown-toolbar-title">Recent (3)</h3>
      </div><!-- /dropdown-toolbar -->

      <ul class="dropdown-menu notifications">
        <li class="notification">
            <div class="media">
              <div class="media-left">
                <div class="media-object">
                  <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
                </div>
              </div>
              <div class="media-body">
                <strong class="notification-title"><a href="#">Dave Lister</a> commented on <a href="#">DWARF-13 - Maintenance</a></strong>
                <p class="notification-desc">I totally don't wanna do it. Rimmer can do it.</p>

                <div class="notification-meta">
                  <small class="timestamp">27. 11. 2015, 15:00</small>
                </div>
              </div>
            </div>
        </li>

        <li class="notification">
            <div class="media">
              <div class="media-left">
                <div class="media-object">
                  <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
                </div>
              </div>
              <div class="media-body">
                <strong class="notification-title"><a href="#">Nikola Tesla</a> resolved <a href="#">T-14 - Awesome stuff</a></strong>

                <p class="notification-desc">Resolution: Fixed, Work log: 4h</p>

                <div class="notification-meta">
                  <small class="timestamp">27. 10. 2015, 08:00</small>
                </div>

              </div>
            </div>
        </li>

        <li class="notification">
            <div class="media">
              <div class="media-left">
                <div class="media-object">
                  <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
                </div>
              </div>
              <div class="media-body">
                <strong class="notification-title"><a href="#">James Bond</a> resolved <a href="#">B-007 - Desolve Spectre organization</a></strong>

                <div class="notification-meta">
                  <small class="timestamp">1. 9. 2015, 08:00</small>
                </div>

              </div>
            </div>
        </li>
      </ul>
    </div>
  </div>

</div>

~~~html
<div class="btn-group dropdown dropdown-notifications sw-open">
  <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    <i data-count="3" class="glyphicon glyphicon-bell notification-icon"></i>
    <span class="caret"></span>
  </button>

  <div class="dropdown-container">
   <div class="dropdown-toolbar">
      <div class="dropdown-toolbar-actions">
        <a href="#"><i class="glyphicon glyphicon-search"></i> View All</a>
      </div>
      <h3 class="dropdown-toolbar-title">Recent Notifications  (3)</h3>
    </div><!-- /dropdown-toolbar -->

    <ul class="dropdown-menu notifications">
      ...
    </ul>
  </div>
</div>
~~~

### Application Notifications

Notifications component can be used for any kind of messages you want to show in your app. Number of unread messages can be indicated by a simple icon with appropriate message count. Its style can be adjusted by a set of variables, thefore it will always fit your design.

<div class="sw-example" style="padding-bottom: 390px">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <a class="navbar-brand" href="#">Tasks</a>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="dropdown dropdown-notifications open">
            <a href="#notifications-panel" class="dropdown-toggle">
              <i data-count="2" class="glyphicon glyphicon-bell notification-icon"></i>
            </a>

            <div class="dropdown-container">

              <div class="dropdown-toolbar">
                <div class="dropdown-toolbar-actions">
                  <a href="#">Mark all as read</a>
                </div>
                <h3 class="dropdown-toolbar-title">Notifications (2)</h3>
              </div><!-- /dropdown-toolbar -->

              <ul class="dropdown-menu">
                    <li class="notification">
                      <div class="media">
                        <div class="media-left">
                          <div class="media-object">
                            <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
                          </div>
                        </div>
                        <div class="media-body">
                          <strong class="notification-title"><a href="#">Dave Lister</a> commented on <a href="#">DWARF-13 - Maintenance</a></strong>
                          <p class="notification-desc">I totally don't wanna do it. Rimmer can do it.</p>

                          <div class="notification-meta">
                            <small class="timestamp">27. 11. 2015, 15:00</small>
                          </div>
                        </div>
                      </div>
                  </li>

                  <li class="notification active">
                      <div class="media">
                        <div class="media-left">
                          <div class="media-object">
                            <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
                          </div>
                        </div>
                        <div class="media-body">
                          <strong class="notification-title"><a href="#">Nikola Tesla</a> resolved <a href="#">T-14 - Awesome stuff</a></strong>

                          <p class="notification-desc">Resolution: Fixed, Work log: 4h</p>

                          <div class="notification-meta">
                            <small class="timestamp">27. 10. 2015, 08:00</small>
                          </div>

                        </div>
                      </div>
                  </li>

                  <li class="notification">
                      <div class="media">
                        <div class="media-left">
                          <div class="media-object">
                            <img data-src="holder.js/50x50?bg=cccccc" class="img-circle" alt="Name">
                          </div>
                        </div>
                        <div class="media-body">
                          <strong class="notification-title"><a href="#">James Bond</a> resolved <a href="#">B-007 - Desolve Spectre organization</a></strong>

                          <div class="notification-meta">
                            <small class="timestamp">1. 9. 2015, 08:00</small>
                          </div>

                        </div>
                      </div>
                  </li>

              </ul>

              <div class="dropdown-footer text-center">
                <a href="#">View All</a>
              </div><!-- /dropdown-footer -->

            </div><!-- /dropdown-container -->
          </li><!-- /dropdown -->

          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">People</a></li>
        </ul>
      </div>
    </div>
  </nav>
</div>

~~~html
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <a class="navbar-brand" href="#">Tasks</a>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="dropdown dropdown-notifications">
            <a href="#notifications-panel" class="dropdown-toggle">
              <i data-count="2" class="glyphicon glyphicon-bell notification-icon"></i>
            </a>

            <div class="dropdown-container">

              <div class="dropdown-toolbar">
                <div class="dropdown-toolbar-actions">
                  <a href="#">Mark all as read</a>
                </div>
                <h3 class="dropdown-toolbar-title">Notifications (2)</h3>
              </div><!-- /dropdown-toolbar -->

              <ul class="dropdown-menu">
                  ...
              </ul>

              <div class="dropdown-footer text-center">
                <a href="#">View All</a>
              </div><!-- /dropdown-footer -->

            </div><!-- /dropdown-container -->
          </li><!-- /dropdown -->

          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">People</a></li>
        </ul>
      </div>
    </div>
  </nav>
~~~

## Notifications Overview

### <span class="text-muted">Module: </span>Notifications

This table gives you a quick overview of elements and variables.

<div class="table-responsive sw-table">
  <table class="table table-bordered">
    <thead>
     <tr>
       <th style="width: 200px">Name</th>
       <th style="width: 200px">Class</th>
       <th>Usage</th>
     </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Wrapper</strong></td>
        <td><code>.notifications</code></td>
        <td>Wrapper for <code>.notification</code> elements.</td>
      </tr>

      <tr>
        <td><strong>Notification</strong></td>
        <td><code>.notification</code></td>
        <td>Notification element, which can consist of title, text, meta data, etc.</td>
      </tr>

      <tr>
        <td><strong>Title</strong></td>
        <td><code>.notification-title</code></td>
        <td>Title can contain any text, also links. It can be emphasized, if you use <code>&lt;strong></code> element.</td>
      </tr>

      <tr>
        <td><strong>Description</strong></td>
        <td><code>.notification-title</code></td>
        <td>Description is optional, you don't have to use one. It may be comment, change in related record, etc.</td>
      </tr>

      <tr>
        <td><strong>Meta (time/date)</strong></td>
        <td><code>.notification-meta</code></td>
        <td>Additional meta information, which provides more context for the notification.</td>
      </tr>
    </tbody>
  </table>
</div>

### <span class="text-muted">Module: </span>Notification Icon

This table gives you a quick overview of elements and variables.

<div class="table-responsive sw-table">
  <table class="table table-bordered">
    <thead>
     <tr>
       <th style="width: 100px">Name</th>
       <th style="width: 200px">Class</th>
       <th>Usage</th>
     </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Icon</strong></td>
        <td><code>.notification-icon</code></td>
        <td>
          <p>Indicator of unread notifications / messages, which can be used on icons.</p>

          <strong>Variables:</strong>
          <ul>
            <li><code>@notifications-icon-font-size: 0.786 * @font-size-base;</code><br><span class="text-muted">Number inside the indicator</span></li>
            <li><code>@notifications-icon-bg: red;</code><br><span class="text-muted">Color of the background, usually red.</span></li>
            <li><code>@notifications-icon-color: #fff;</code><br><span class="text-muted">Text color</span></li>
            <li><code>@notifications-icon-radius: 10px</code><br><span class="text-muted"></span></li>
          </ul>
        </td>
      </tr>
   </tbody>
  </table>
</div>
