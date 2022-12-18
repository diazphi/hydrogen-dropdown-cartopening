import {Link, Image} from '@shopify/hydrogen';

import {Heading, Section, Grid} from '~/components';

export function FeaturedCollections({data}) {
  return (
    <Section>
      <div className="featured-collection">
            {data?.nodes.length > 0 && (
              <>
                {(data?.nodes || []).map((item) => (
                  <div className="collection-item" key={item.id}>
                    <img 
                      width="320"
                      height="400"
                      src={item.image?.url}
                      loading="lazy"
                      alt={`Picture of ${item.title}`}
                    />
                    <h2>{item.title}</h2>
                  </div>
                ))}
              </>
            )}
      </div>
    </Section>
  );
}
