create table public.users (
    uuid uuid primary key,
    first_name text not null default ''::text,
    last_name text not null default ''::text,
    created_at timestamp with time zone not null default now()
);
create table public.categories (
    id serial primary key,
    name text not null default ''::text,
    picture_url text null,
    created_at timestamp with time zone not null default now()
);
create table public.words (
    id serial primary key,
    en text not null default ''::text,
    ka text not null default ''::text,
    transcription text null,
    category_id int null,
    picture_url text null,
    sound_url text null,
    created_at timestamp with time zone not null default now(),
    foreign key (category_id) references public.categories (id) on delete
    set default
);
create table public.phrases (
    id serial primary key,
    en text not null default ''::text,
    ka text not null default ''::text,
    transcription text null,
    category_id int null,
    created_at timestamp with time zone not null default now(),
    foreign key (category_id) references public.categories (id) on delete
    set default
);
create table public.statistics (
    id serial primary key,
    word_id int not null,
    user_id uuid not null,
    translation_shown int not null default 0,
    right_answers int not null default 0,
    wrong_answers int not null default 0,
    total_answers int not null default 0,
    is_learned boolean not null default false,
    is_favorite boolean not null default false,
    created_at timestamp with time zone not null default now(),
    foreign key (word_id) references public.words (id) on delete cascade,
    foreign key (user_id) references public.users (uuid) on delete cascade
);
