export default {
    vizGridItems: [
        //we'll be replacing these img_src with paths to location on s3
        //vizRoutes will direct to appropriate subpage
        {
            title: 'Link to five droughts that changed history website',
            id: 'drought-timeline',
            url: 'https://labs.waterdata.usgs.gov/visualizations/drought-timeline/',
            img_src: 'drought-timeline_thumbnail.png',
            alt: 'Thumbnail image for five droughts that changed history website'
        },
        {
            title: 'Link to modeling streamflow drought website',
            id: 'modeling-drought',
            url: 'https://water.usgs.gov/vizlab/modeling-drought/',
            img_src: 'modeling-drought_metacard.png',
            alt: 'Thumbnail image for modeling streamflow drought website'
        },
        {
            title: 'Link to River DroughtCast mapper',
            id: 'streamflow-drought-forecasts',
            url: 'https://water.usgs.gov/vizlab/streamflow-drought-forecasts/',
            img_src: 'streamflow-drought-forecasts_metacard.png',
            alt: 'Thumbnail image for River DroughtCast mapper'
        }   
    ]
};