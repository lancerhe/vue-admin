<template>
  <div>
    <section class="content-header">
      <h1>
        Console
        <small>Advertising Sandbox</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link :to="{ name: 'Home' }">
            <i class="fa fa-dashboard" /> Home
          </router-link>
        </li>
        <li class="active">
          Advertising Sandbox
        </li>
      </ol>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-header">
              <h3 class="box-title">
                Sponsored Products Targets
              </h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
              <table class="table table-bordered table-hover">
                <tbody>
                  <tr>
                    <th>Keyword ID</th>
                    <th>Campaign</th>
                    <th>AdGroup</th>
                    <th>Bid</th>
                    <th>Expression Type</th>
                    <th>Expression</th>
                    <th>State</th>
                    <th>Serving Status</th>
                    <th>Creation Date</th>
                    <th>Last Updated Date</th>
                    <th />
                  </tr>
                  <tr>
                    <td>176356426792347</td>
                    <td>Auto Campaign2</td>
                    <td>Auto AdGroup2</td>
                    <td />
                    <td>auto</td>
                    <td>[{"type":"queryHighRelMatches"}]</td>
                    <td>enabled</td>
                    <td>CAMPAIGN_ARCHIVED</td>
                    <td>2019-12-30 17:05</td>
                    <td>2019-12-30 17:05</td>
                    <td>
                      <a
                        class="btn bg-navy btn-xs"
                      >Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        <!-- /.box -->
        </div>
      </div>
    </section>
  </div>
</template>
