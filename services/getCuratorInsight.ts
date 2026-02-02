export const getCuratorInsight = (categoryName: string, description: string): string => {
  const curatorInsights: Record<string, string> = {
    'winter': "These images capture the profound stillness that winter brings to urban landscapes. Where noise typically defines city life, here we witness silence rendered visible—snow acts as both veil and mirror, transforming familiar architecture into something ethereal. Each frame explores the paradox of cold: simultaneously harsh and forgiving, isolating yet connecting us to shared human vulnerability.",
    'newmexico': "This collection is a meditation on geological time made visible. The desert here becomes a palimpsest of ancient forces—wind, water, and light sculpting stone into narratives spanning millions of years. These photographs reveal how landscape holds memory, how color speaks of deep time, and how solitude in vast spaces can become profoundly spiritual.",
    'urban': "The city revealed through motion—this collection captures the kinetic poetry of urban life where billions of moments intersect. Photography here becomes choreography, freezing the rhythm of human flow while suggesting the stories we'll never fully know. Architecture serves as stage for endless performances of transience and connection.",
    'nature': "Light becomes the subject here more than landscape itself. These images are studies in ephemeral beauty—the precise moments when day surrenders to night, when water reflects infinity, when peaks touch heaven. They remind us that nature's grandeur is fleeting, meant to be witnessed in stillness rather than captured.",
    'portrait': "Portraiture is the art of revealing character and emotion in a single frame. This collection invites viewers to connect with the subject’s inner world—each image is a study in vulnerability, strength, and the subtle interplay of light and expression. Through these portraits, we glimpse the stories, dreams, and identities that make each individual unique, set against the backdrop of meaningful places."
  };

  return curatorInsights[categoryName.toLowerCase()] || 
    "A stunning collection capturing the essence of the subject with masterful precision and emotional depth."
};
