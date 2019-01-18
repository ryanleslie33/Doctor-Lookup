
<div id="content-placeholder"></div>
<script id="doc-template" type="text/x-handlebars-template">
<h3>BetterDoctor - {{data.profile.first_name}} {{data.profile.last_name}}, {{data.profile.title}}</h3>
    <p class="address">
        {{#data.practices}}
        {{name}}<br>
        {{visit_address.street}}<br>
        {{visit_address.city}}, {{visit_address.state}} {{visit_address.zip}}
        {{/data.practices}}
    </p>
    <p class="bio">{{data.profile.dynamic_bio}}</p>
    <table>
        <tr>

            <td><a href="{{data.attribution_url}}" target="_new">{{data.attribution_url}}</a></td>
        </tr>
        <tr>
            <th>Picture</th>
            <td><img src="{{data.profile.image_url}}"></img></td>
        </tr>
        <tr>
            <th>Specialties</th>
            <td>
            {{#data.specialties}}
            {{name}}<br>
            {{/data.specialties}}
            </td>
        </tr>
    </table>
</script>
</body>
