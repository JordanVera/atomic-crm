ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS concept_website extensions.citext;

DROP VIEW IF EXISTS public.companies_summary;

CREATE VIEW public.companies_summary WITH (security_invoker = on) AS
SELECT
    c.id,
    c.created_at,
    c.name,
    c.sector,
    c.size,
    c.linkedin_url,
    c.instagram_url,
    c.website,
    c.concept_website,
    c.phone_number,
    c.address,
    c.zipcode,
    c.city,
    c.state_abbr,
    c.sales_id,
    c.context_links,
    c.country,
    c.description,
    c.revenue,
    c.tax_identifier,
    c.logo,
    count(distinct d.id) as nb_deals,
    count(distinct co.id) as nb_contacts
FROM public.companies c
    LEFT JOIN public.deals d ON c.id = d.company_id
    LEFT JOIN public.contacts co ON c.id = co.company_id
GROUP BY c.id;
