import { useParams } from "react-router-dom";
import { features } from "../data/features";
import PageWrapper from "../components/PageWrapper";

function Feature() {
  const { slug } = useParams();
  const feature = features.find((f) => f.slug === slug);

  if (!feature) {
    return <p className="p-8">Feature not found</p>;
  }

  return (
    <PageWrapper>
      <main className="px-8 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          {feature.icon} {feature.title}
        </h1>

        <p className="text-lg text-slate-300">
          {feature.description}
        </p>
      </main>
    </PageWrapper>
  );
}

export default Feature;
