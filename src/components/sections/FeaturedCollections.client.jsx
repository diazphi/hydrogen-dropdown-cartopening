import {Link, Image} from '@shopify/hydrogen';

import {Heading, Section, Grid} from '~/components';

export function FeaturedCollections({data}) {
  console.log(data);


  return (
    <Section>
      <div className="featured-collection">
            {data?.nodes.length > 0 && (
              <>
                {(data?.nodes || []).map((item) => (
                  <div className="collection-item" key={item.id}>
                    {console.log(item)}
                    <img 
                      width="320"
                      height="400"
                      src={item.image?.url}
                      loading="lazy"
                      alt={`Picture of ${item.title}`}
                    />
                  </div>
                ))}
              </>
            )}
      </div>
    </Section>
  );
}
